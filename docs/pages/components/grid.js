import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import {
  demos,
  docs,
  requireDemo,
} from '!@material-ui/markdown/loader!docs/src/pages/components/grid/grid.md';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} requireDemo={requireDemo} />;
}
