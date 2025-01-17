import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';
import { db } from '@/lib/db';
import type { PurchaseOrder } from '@/types';

const materialSchema = z.object({
  name: z.string().min(1, 'Material name is required'),
  quantity: z.number().min(1, 'Quantity must be greater than 0'),
  unit: z.string().min(1, 'Unit is required'),
  unitPrice: z.number().min(0, 'Unit price must be a positive number'),
  totalPrice: z.number().min(0, 'Total price must be a positive number'),
});

const formSchema = z.object({
  poNumber: z.string().min(1, 'PO number is required'),
  supplierName: z.string().min(1, 'Supplier name is required'),
  supplierAddress: z.string().min(1, 'Supplier address is required'),
  supplierContact: z.string().min(1, 'Supplier contact is required'),
  orderDate: z.string().min(1, 'Order date is required'),
  deliveryDate: z.string().min(1, 'Delivery date is required'),
  materials: z.array(materialSchema).min(1, 'At least one material is required'),
  totalCost: z.number().min(0, 'Total cost must be a positive number'),
  paymentTerms: z.string().min(1, 'Payment terms are required'),
  specialInstructions: z.string().optional(),
});

type PurchaseOrderFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: PurchaseOrder | null;
  onSuccess: () => void;
};

export function PurchaseOrderForm({
  open,
  onOpenChange,
  order,
  onSuccess,
}: PurchaseOrderFormProps) {
  const { showToast } = useToast();
  const form = useForm<PurchaseOrder>({
    resolver: zodResolver(formSchema),
    defaultValues: order || {
      poNumber: `PO-${Date.now()}`,
      supplierName: '',
      supplierAddress: '',
      supplierContact: '',
      orderDate: new Date().toISOString().split('T')[0],
      deliveryDate: '',
      materials: [
        {
          name: '',
          quantity: 1,
          unit: '',
          unitPrice: 0,
          totalPrice: 0,
        },
      ],
      totalCost: 0,
      paymentTerms: 'Net 30',
      specialInstructions: '',
      status: 'draft',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'materials',
  });

  const onSubmit = async (data: PurchaseOrder) => {
    try {
      const orderData = {
        ...data,
        id: order?.id || crypto.randomUUID(),
        status: order?.status || 'draft',
        createdAt: order?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await db.put('purchase_orders', orderData);
      showToast(
        `Purchase order ${order ? 'updated' : 'created'} successfully`,
        'success'
      );
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving purchase order:', error);
      showToast(
        `Failed to ${order ? 'update' : 'create'} purchase order`,
        'error'
      );
    }
  };

  const calculateTotalPrice = (quantity: number, unitPrice: number) => {
    return quantity * unitPrice;
  };

  const updateTotalCost = () => {
    const materials = form.getValues('materials');
    const totalCost = materials.reduce((sum, item) => sum + item.totalPrice, 0);
    form.setValue('totalCost', totalCost);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            {order ? 'Edit Purchase Order' : 'New Purchase Order'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="poNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PO Number</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplierName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplierContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier Contact</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplierAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="orderDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deliveryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Delivery Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Materials</h3>
                <Button
                  type="button"
                  onClick={() =>
                    append({
                      name: '',
                      quantity: 1,
                      unit: '',
                      unitPrice: 0,
                      totalPrice: 0,
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Material
                </Button>
              </div>

              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="grid grid-cols-6 gap-4 items-end border p-4 rounded-lg"
                  >
                    <FormField
                      control={form.control}
                      name={`materials.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>Material Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`materials.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) => {
                                const quantity = Number(e.target.value);
                                field.onChange(quantity);
                                const unitPrice = form.getValues(
                                  `materials.${index}.unitPrice`
                                );
                                form.setValue(
                                  `materials.${index}.totalPrice`,
                                  calculateTotalPrice(quantity, unitPrice)
                                );
                                updateTotalCost();
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`materials.${index}.unit`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`materials.${index}.unitPrice`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit Price</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) => {
                                const unitPrice = Number(e.target.value);
                                field.onChange(unitPrice);
                                const quantity = form.getValues(
                                  `materials.${index}.quantity`
                                );
                                form.setValue(
                                  `materials.${index}.totalPrice`,
                                  calculateTotalPrice(quantity, unitPrice)
                                );
                                updateTotalCost();
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => remove(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="totalCost"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total Cost</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        readOnly
                        className="bg-gray-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentTerms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Terms</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {order ? 'Update Order' : 'Create Order'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}