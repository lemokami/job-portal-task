'use client';
import React from 'react';
import {
  Modal,
  Button,
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Group,
  Flex,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from 'react-hook-form';

function CreateJobOpeningModal() {
  const [opened, setOpened] = React.useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    setOpened(false); // Close the modal on successful submission
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Create Job Opening</Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Create Job Opening'
        centered
        size='xl'
        padding='lg'
        radius='lg'
        withCloseButton={false}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <Flex gap={16}>
            <TextInput
              label='Job Title'
              placeholder='Full Stack Developer'
              flex={1}
              {...register('jobTitle')}
              required
            />
            <TextInput
              label='Company Name'
              placeholder='Amazon, Microsoft, Swiggy'
              flex={1}
              {...register('companyName')}
              required
            />
          </Flex>
          <Flex gap={16}>
            <Select
              label='Location'
              placeholder='Choose Preferred Location'
              data={['Remote', 'Onsite', 'Hybrid']}
              flex={1}
              {...register('location')}
              onChange={(value) => setValue('location', value)}
              required
            />
            <Select
              label='Job Type'
              placeholder='Select job type'
              data={['FullTime', 'PartTime', 'Internship']}
              flex={1}
              {...register('jobType')}
              onChange={(value) => setValue('jobType', value)}
              required
            />
          </Flex>

          <Flex gap={16}>
            <Flex align='end' gap={8} flex={1}>
              <NumberInput
                label='Salary Range'
                placeholder='₹0'
                {...register('salaryFrom')}
                onChange={(value) => setValue('salaryFrom', value)}
                min={100}
                max={10000}
                required
              />
              <NumberInput
                label=''
                placeholder='₹12,00,000'
                {...register('salaryTo')}
                onChange={(value) => setValue('salaryTo', value)}
                min={100}
                max={10000}
                required
              />
            </Flex>
            <DateInput
              label='Application Deadline'
              placeholder='Pick a date'
              flex={1}
              {...register('applicationDeadline')}
              onChange={(value) => setValue('applicationDeadline', value)}
              required
              popoverProps={{ withinPortal: true }}
            />
          </Flex>
          <Textarea
            label='Job Description'
            placeholder='Please share a description to let the candidate know more about the job role'
            {...register('jobDescription')}
            required
          />
          <Group justify='space-between' mt='md'>
            <Button
              variant='outline'
              color='rgba(0, 0, 0, 1)'
              size='md'
              radius='md'
              onClick={() => setOpened(false)}>
              Save Draft
            </Button>
            <Button type='submit'>Publish</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}

export default CreateJobOpeningModal;
