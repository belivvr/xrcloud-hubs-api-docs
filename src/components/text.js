import React from 'react';

import { url } from '@site/package.json';

/**
 * @typedef { import("react").ReactNode } ReactNode
 */

/**
 * @param {{
 *   color: string;
 *   children: ReactNode;
 * }}
 * 
 * @returns {JSX.Element}
 */
export function Bold({ color = 'red', children }) {
  return <strong style={{ color }}>{children}</strong>;
}

export function APIUrl() {
  return url;
}
