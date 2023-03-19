export interface Theme {
  backgroundColor: string;
  secondaryBackgroundColor: string;
  color: string,

  pageHeader: {
    textColor: string
  },

  input: {
    backgroundColor: string
  },

  listItem: {
    hover: {
      color: string
    }
  },

  modal: {
    backgroundColor: string
  },

  header: {
    backgroundColor: string
  }
}

export interface ThemeProps {
  theme: Theme
}

export const lightTheme = {
  backgroundColor: '#fff',
  secondaryBackgroundColor: '#fff',
  color: '#000',

  pageHeader: {
    textColor: '#211f33'
  },

  input: {
    backgroundColor: '#fff'
  },

  listItem: {
    hover: {
      color: '#000'
    }
  },

  modal: {
    backgroundColor: '#fff'
  },

  header: {
    backgroundColor: '#002a42'
  }
}

export const darkTheme = {
  backgroundColor: '#000',
  color: '#fff',

  pageHeader: {
    textColor: '#eee'
  },

  input: {
    backgroundColor: '#222'
  },

  listItem: {
    hover: {
      color: '#000'
    }
  },

  modal: {
    backgroundColor: '#000'
  },

  header: {
    backgroundColor: '#002a42'
  }
}