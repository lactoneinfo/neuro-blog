// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = '神経科学ノート';
export const SITE_DESCRIPTION = '神経科学関連で学んだことのメモ';

export interface MenuItem {
    label: string;
    path?: string;
    children?: MenuItem[];
  }
  
  export const MENU: MenuItem[] = [
    {
      label: "神経科学",
      children: [
        // { label: "分子",     path: "/neuro-molecular" },
        { label: "細胞",     path: "/neuro-cell" },
        // { label: "皮質領域", path: "/neuro-cortex" },
        // { label: "領域間・全脳", path: "/neuro-global" },
        // { label: "認知・行動", path: "/neuro-cognitive" },
      ],
    },
    // {
    //   label: "神経計測手法",
    //   children: [
    //     { label: "in vitro",       path: "/measurement-in-vitro" },
    //     { label: "動物 in vivo",   path: "/measurement-animal-in-vivo" },
    //     { label: "ヒト侵襲",       path: "/measurement-human-invasive" },
    //     { label: "ヒト非侵襲",     path: "/measurement-human-noninvasive" },
    //   ],
    // },
    // {
    //   label: "数学・物理理論",
    //   children: [
    //     { label: "数理理論",   path: "/theory" },
    //   ],
    // },
    // {
    //   label: "リソース／About",
    //   path: "/about",
    // },
  ];
  