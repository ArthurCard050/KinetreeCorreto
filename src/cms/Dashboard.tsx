import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { Title } from 'react-admin';

export const Dashboard = () => (
  <div style={{ padding: '20px' }}>
    <Title title="Dashboard - Kinetree CMS" />
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      <Card>
        <CardHeader title="🎯 Bem-vindo ao Kinetree CMS" />
        <CardContent>
          <p>Gerencie o conteúdo do seu site de forma simples e intuitiva.</p>
          <ul>
            <li>✅ Auto-commit no Git</li>
            <li>✅ Interface moderna</li>
            <li>✅ Edição em tempo real</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="📊 Estatísticas" />
        <CardContent>
          <p><strong>Projetos:</strong> 4</p>
          <p><strong>Depoimentos:</strong> 12</p>
          <p><strong>Última atualização:</strong> Hoje</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="🚀 Ações Rápidas" />
        <CardContent>
          <p>• Adicionar novo projeto</p>
          <p>• Gerenciar depoimentos</p>
          <p>• Configurar informações</p>
        </CardContent>
      </Card>
    </div>
  </div>
);