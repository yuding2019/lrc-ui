import { CLASS_NAME_PREFIX } from '../constant';

export function styleInject(css?: string) {
  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if ('styleSheet' in style) {
    (style.styleSheet as any).cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

export function getMainClassName(component: string) {
  return `${CLASS_NAME_PREFIX}-${component}`;
}
