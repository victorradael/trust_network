import React from 'react';

import { AuthProvider } from './auth';

const AppProviders: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProviders;
