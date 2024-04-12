import { Box } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeEditorProps {
  codeString: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ( {codeString} ) => {
  return (
    <Box sx={{ minWidth: '90vw' }}>
      <SyntaxHighlighter language="typescript" style={vs2015} showLineNumbers wrapLongLines>
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeEditor;