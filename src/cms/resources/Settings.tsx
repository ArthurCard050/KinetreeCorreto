import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin';

export const SettingsEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="company_name" label="Nome da Empresa" validate={required()} />
      <TextInput source="tagline" label="Tagline" validate={required()} />
      <TextInput source="contact_email" label="Email de Contato" validate={required()} />
      <TextInput source="phone" label="Telefone" />
      <TextInput source="address" label="Endereço" multiline rows={2} />
      
      <h3>Redes Sociais</h3>
      <TextInput source="social_media.instagram" label="Instagram" />
      <TextInput source="social_media.linkedin" label="LinkedIn" />
      <TextInput source="social_media.github" label="GitHub" />
    </SimpleForm>
  </Edit>
);