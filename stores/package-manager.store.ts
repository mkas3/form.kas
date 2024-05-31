import { z } from 'zod';
import { create } from 'zustand';

const packageManagerSchema = z.enum(['npm', 'yarn', 'pnpm', 'bun', 'manual']);

type PackageManager = z.infer<typeof packageManagerSchema>;

type PackageManagerStore = {
  currentPackageManager: PackageManager;
  setCurrentPackageManager: (value: string) => void;
  initializePackageManager: () => void;
};

export const usePackageManagerStore = create<PackageManagerStore>((set) => ({
  currentPackageManager: 'npm',
  setCurrentPackageManager: (value) => {
    const packageManager = packageManagerSchema.safeParse(value);
    const newPackageManager = packageManager.success
      ? packageManager.data
      : 'npm';

    localStorage.setItem('package-manager', newPackageManager);
    set({ currentPackageManager: newPackageManager });
  },
  initializePackageManager: () => {
    const packageManager = packageManagerSchema.safeParse(
      localStorage.getItem('package-manager')
    );
    const newPackageManager = packageManager.success
      ? packageManager.data
      : 'npm';

    set({ currentPackageManager: newPackageManager });
  },
}));
