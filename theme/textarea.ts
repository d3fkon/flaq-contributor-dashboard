const TextArea = {
  variants: {
    primary: {
      field: {
        border: '1px solid',
        borderColor: 'red',
        bg: 'inherit',
        _hover: {
          borderColor: 'gray.300',
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _invalid: {
          borderColor: '#e53e3e',
          boxShadow: `0 0 0 1px #ffffff`,
        },
        _focusVisible: {
          zIndex: 1,
          borderColor: '#ffffff',
          boxShadow: `0 0 0 1px #000000`,
        },
      },
    },
  },
};

export default TextArea;
