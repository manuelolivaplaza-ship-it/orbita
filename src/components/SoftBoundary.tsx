import { Component, type ReactNode } from 'react';

/** Si un bloque (galería, CRM, Orb) revienta, el resto de la página sigue. */
export class SoftBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}
