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
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  ImageField,
  ImageInput,
  required,
} from 'react-admin';

export const ProjectList = () => (
  <List>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="title" label="Título" />
      <TextField source="category" label="Categoria" />
      <TextField source="result" label="Resultado" />
      <BooleanField source="featured" label="Destaque" />
      <NumberField source="order" label="Ordem" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="title" label="Título" validate={required()} />
      <TextInput source="description" label="Descrição" multiline rows={3} />
      <SelectInput
        source="category"
        label="Categoria"
        choices={[
          { id: 'Site institucional', name: 'Site institucional' },
          { id: 'Landing page', name: 'Landing page' },
          { id: 'E-commerce', name: 'E-commerce' },
          { id: 'E-commerce e Landing page', name: 'E-commerce e Landing page' },
          { id: 'Portal corporativo', name: 'Portal corporativo' },
          { id: 'Web App', name: 'Web App' },
          { id: 'Portfólio', name: 'Portfólio' },
        ]}
        validate={required()}
      />
      <TextInput source="result" label="Resultado" helperText="Ex: +240% conversão" />
      <TextInput source="image" label="Imagem (URL)" validate={required()} />
      <TextInput source="url" label="URL do Projeto" validate={required()} />
      <BooleanInput source="featured" label="Projeto em Destaque" />
      <NumberInput source="order" label="Ordem" validate={required()} />
      <ArrayInput source="technologies" label="Tecnologias">
        <SimpleFormIterator>
          <TextInput source="" label="Tecnologia" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="duration" label="Duração" helperText="Ex: 3 semanas" />
      <TextInput source="year" label="Ano" />
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput source="id" label="ID" validate={required()} />
      <TextInput source="title" label="Título" validate={required()} />
      <TextInput source="description" label="Descrição" multiline rows={3} />
      <SelectInput
        source="category"
        label="Categoria"
        choices={[
          { id: 'Site institucional', name: 'Site institucional' },
          { id: 'Landing page', name: 'Landing page' },
          { id: 'E-commerce', name: 'E-commerce' },
          { id: 'E-commerce e Landing page', name: 'E-commerce e Landing page' },
          { id: 'Portal corporativo', name: 'Portal corporativo' },
          { id: 'Web App', name: 'Web App' },
          { id: 'Portfólio', name: 'Portfólio' },
        ]}
        validate={required()}
      />
      <TextInput source="result" label="Resultado" helperText="Ex: +240% conversão" />
      <TextInput source="image" label="Imagem (URL)" validate={required()} />
      <TextInput source="url" label="URL do Projeto" validate={required()} />
      <BooleanInput source="featured" label="Projeto em Destaque" defaultValue={true} />
      <NumberInput source="order" label="Ordem" validate={required()} />
      <ArrayInput source="technologies" label="Tecnologias">
        <SimpleFormIterator>
          <TextInput source="" label="Tecnologia" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="duration" label="Duração" helperText="Ex: 3 semanas" />
      <TextInput source="year" label="Ano" />
    </SimpleForm>
  </Create>
);