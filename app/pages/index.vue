<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string("Password is required")
    .min(8, "Must be at least 8 characters"),
  pin: z.array(z.string()),
  color: z.string(),
  file: z.instanceof(File),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
  pin: undefined,
  color: undefined,
  file: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  console.log(event.data);
}
</script>

<template>
  <div class="p-10">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UFormField label="Pin" name="pin">
        <UPinInput v-model="state.pin" />
      </UFormField>

      <UFormField label="Pin" name="pin">
        <UColorPicker v-model="state.color" />
      </UFormField>

      <UFormField label="Pin" name="pin">
        <UFileUpload v-model="state.file" class="w-96 min-h-48" />
      </UFormField>

      <UButton type="submit"> Submit </UButton>
    </UForm>

    <button class="bg-green-300"></button>
    <button class="bg-blue-300"></button>
    <button class="bg-primary-300"></button>
    <button class="bg-secondary-300"></button>
  </div>
</template>
