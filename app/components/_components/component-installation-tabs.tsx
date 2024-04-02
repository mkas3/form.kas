'use client';

import { useEffect } from 'react';
import { usePackageManagerStore } from '@/stores/package-manager.store';

import { Tabs } from '@/components/ui/tabs';

type ComponentInstallationTabsProps = React.ComponentPropsWithoutRef<
  typeof Tabs
>;

export const ComponentInstallationTabs = ({
  ...props
}: ComponentInstallationTabsProps) => {
  const {
    currentPackageManager,
    setCurrentPackageManager,
    initializePackageManager,
  } = usePackageManagerStore();

  useEffect(() => {
    initializePackageManager();
  }, [initializePackageManager]);

  const handleValueChange = (value: string) => {
    setCurrentPackageManager(value);
  };

  return (
    <Tabs
      value={currentPackageManager}
      onValueChange={handleValueChange}
      {...props}
    />
  );
};
