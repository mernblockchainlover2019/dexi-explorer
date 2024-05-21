import React, { createElement } from 'react';
import type { SvgIconPropsWithChildren } from '../common/SvgIcon';
import { SvgIcon } from '../common/SvgIcon';
function SvgTelegram(props: SvgIconPropsWithChildren) {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Vector"
        d="M15.6979 1.15207C15.4249 0.911802 14.9963 0.877424 14.553 1.06216H14.5523C14.0861 1.25634 1.35691 6.92453 0.838721 7.15611C0.74447 7.19011 -0.078672 7.50896 0.00611675 8.21918C0.081808 8.85952 0.743379 9.12472 0.824165 9.15532L4.06033 10.3057C4.27503 11.0476 5.06651 13.785 5.24155 14.3698C5.35072 14.7344 5.52867 15.2134 5.84053 15.312C6.11418 15.4215 6.38638 15.3214 6.56251 15.1779L8.54103 13.2727L11.735 15.8586L11.811 15.9058C12.0279 16.0056 12.2357 16.0554 12.434 16.0554C12.5872 16.0554 12.7343 16.0256 12.8747 15.9659C13.3533 15.7619 13.5447 15.2886 13.5647 15.2349L15.9504 2.36134C16.096 1.67378 15.8936 1.32396 15.6979 1.15207ZM6.9144 10.7658L5.8227 13.788L4.731 10.0102L13.1007 3.58799L6.9144 10.7658Z"
        fill="currentColor"
      />
    </svg>,
  );
}
export default SvgTelegram;
