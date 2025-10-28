import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { ProjectList, ProjectEdit, ProjectCreate } from './resources/Projects';
import { TestimonialList, TestimonialEdit, TestimonialCreate } from './resources/Testimonials';
import { SettingsEdit } from './resources/Settings';
import { Dashboard } from './Dashboard';
import { Layout } from './Layout';
import { theme } from './theme';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
    theme={theme}
    title="Kinetree CMS"
  >
    <Resource
      name="projects"
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
      options={{ label: '📁 Projetos' }}
    />
    <Resource
      name="testimonials"
      list={TestimonialList}
      edit={TestimonialEdit}
      create={TestimonialCreate}
      options={{ label: '💬 Depoimentos' }}
    />
    <Resource
      name="settings"
      edit={SettingsEdit}
      options={{ label: '⚙️ Configurações' }}
    />
  </Admin>
);

export default App;