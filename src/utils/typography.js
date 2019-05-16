import Typography from 'typography';
import 'circular-std';

const typography = new Typography({
  baseFontSize: 22,
  baseLineHeight: 1.5,
  headerFontFamily: ['CircularStd', 'sans-serif'],
  headerWeight: 800,
  googleFonts: [
    {
      name: 'Muli',
      styles: ['300'],
    },
  ],
  bodyFontFamily: ['Muli'],
  bodyWeight: 300,
  scaleRatio: 2,
});

export const { scale, rhythm } = typography;

export default typography;
