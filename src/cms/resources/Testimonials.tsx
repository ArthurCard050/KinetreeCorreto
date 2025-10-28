import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  required,
} from 'react-admin';

export const TestimonialList = () => (
  <List>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" label="Nome" />
      <TextField source="company" label="Empresa" />
      <TextField source="role" label="Cargo" />
      <NumberField source="rating" label="Avaliação" />
      <BooleanField source="featured" label="Destaque" />
      <NumberField source="order" label="Ordem" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TestimonialEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" label="Nome" validate={required()} />
      <TextInput source="company" label="Empresa" validate={required()} />
      <TextInput source="role" label="Cargo" validate={required()} />
      <TextInput source="content" label="Depoimento" multiline rows={4} validate={required()} />
      <TextInput source="avatar" label="Avatar (URL)" validate={required()} helperText="URL da imagem do avatar" />
      <NumberInput source="rating" label="Avaliação" min={1} max={5} validate={required()} />
      <BooleanInput source="featured" label="Depoimento em Destaque" />
      <NumberInput source="order" label="Ordem" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const TestimonialCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="id" label="ID" validate={required()} />
      <TextInput source="name" label="Nome" validate={required()} />
      <TextInput source="company" label="Empresa" validate={required()} />
      <TextInput source="role" label="Cargo" validate={required()} />
      <TextInput source="content" label="Depoimento" multiline rows={4} validate={required()} />
      <TextInput source="avatar" label="Avatar (URL)" validate={required()} helperText="URL da imagem do avatar" />
      <NumberInput source="rating" label="Avaliação" min={1} max={5} defaultValue={5} validate={required()} />
      <BooleanInput source="featured" label="Depoimento em Destaque" defaultValue={true} />
      <NumberInput source="order" label="Ordem" validate={required()} />
    </SimpleForm>
  </Create>
);