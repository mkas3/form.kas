import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Mark } from '@/components/shared/mark';

type ComponentProp = {
  prop: string;
  type: string;
  default: string;
};

type ComponentPropsProps = React.ComponentPropsWithoutRef<typeof Table> & {
  componentProps: ComponentProp[];
};

export const ComponentProps = ({
  componentProps,
  ...props
}: ComponentPropsProps) => {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {componentProps.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <Mark>{item.prop}</Mark>
            </TableCell>
            <TableCell>
              <Mark>{item.type}</Mark>
            </TableCell>
            <TableCell>
              <Mark>{item.default}</Mark>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
