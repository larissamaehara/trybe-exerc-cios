import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const themeContext = useContext(ThemeContext);
  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <footer>Tema Atual: {themeContext.theme}</footer>;
}

export default Footer;
