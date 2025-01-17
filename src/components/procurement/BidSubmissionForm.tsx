import React from 'react';
import { useForm } from 'react-hook-form';
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
import { Checkbox } from '../ui/checkbox';
import { useToast } from '@/contexts/ToastContext';
import { db } from '@/lib/db';
import type { BidSubmission } from '@/types';

const formSchema = z.object({
  projectId: z.string().min(1, 'Project is required'),
  contractorName: z.string().min(1, 'Contractor name is required'),
  contractorLicense: z.string().min(1, 'Contractor license is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  contactEmail: z.string().email('Invalid email address'),
  contactPhone: z.string().min(10, 'Valid phone number is required'),
  bidAmount: z.number().min(0, 'Bid amount must be a positive number'),
  technicalProposal: z.string().min(1, 'Technical proposal is required'),
  financialProposal: z.string().min(1, 'Financial proposal is required'),
  supportingDocs: z.array(z.string()),
  submissionDate: z.string().min(1, 'Submission date is required'),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and conditions',
  }),
});

type BidSubmissionFormProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bid: BidSubmission | null;
  onSuccess: () => void;
};

export function BidSubmissionForm({
  open,
  onOpenChange,
  bid,
  onSuccess,
}: BidSubmissionFormProps) {
  const { showToast } = useToast();
  const form = useForm<BidSubmission>({
    resolver: zodResolver(formSchema),
    defaultValues: bid || {
      projectId: '',
      contractorName: '',
      contractorLicense: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      bidAmount: 0,
      technicalProposal: '',
      financialProposal: '',
      supportingDocs: [],
      submissionDate: new Date().toISOString().split('T')[0],
      termsAccepted: false,
      status: 'submitted',
    },
  });

  const onSubmit = async (data: BidSubmission) => {
    try {
      const bidData = {
        ...data,
        id: bid?.id || crypto.randomUUID(),
        status: bid?.status || 'submitted',
        createdAt: bid?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await db.put('bid_submissions', bidData);
      showToast(
        `Bid submission ${bid ? 'updated' : 'created'} successfully`,
        'success'
      );
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving bid submission:', error);
      showToast(
        `Failed to ${bid ? 'update' : 'create'} bid submission`,
        'error'
      );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {bid ? 'Edit Bid Submission' : 'New Bid Submission'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="projectId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="submissionDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Submission Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contractor Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="contractorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contractor Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contractorLicense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPerson"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Person</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bidAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bid Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={e => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Proposal Details</h3>
              <FormField
                control={form.control}
                name="technicalProposal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technical Proposal</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[150px]"
                        placeholder="Describe your technical approach, methodology, and work plan..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="financialProposal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Financial Proposal</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-[150px]"
                        placeholder="Provide detailed cost breakdown and financial terms..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I accept the terms and conditions of this bid submission
                    </FormLabel>
                    <FormMessage />
                  </div>
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
                {bid ? 'Update Submission' : 'Submit Bid'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}