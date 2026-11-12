import { useState, type FormEvent } from 'react';
import type { ProjectType } from '../types/content';

export interface ContactFields {
  name: string;
  email: string;
  type: ProjectType;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactFields, 'required' | 'email'>>;
export type ContactStatus = 'idle' | 'sending' | 'success' | 'error';

const EMPTY: ContactFields = { name: '', email: '', type: 'website', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useContactForm() {
  const [fields, setFields] = useState<ContactFields>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>('idle');

  const update = <K extends keyof ContactFields>(key: K, value: ContactFields[K]) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (!fields.name.trim()) next.name = 'required';
    if (!fields.email.trim()) next.email = 'required';
    else if (!EMAIL_RE.test(fields.email.trim())) next.email = 'email';
    if (!fields.message.trim()) next.message = 'required';
    return next;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus('sending');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  return { fields, errors, status, update, submit, reset };
}
