import React from 'react';
import { RecursivePartial, Theme } from '@deity/falcon-ui';

type Preset = {
  name: string;
  theme: RecursivePartial<Theme>;
};
export const availablePresets: Preset[] = [
  {
    name: 'Deity Green',
    theme: {}
  },
  {
    name: 'Ocean Blue',
    theme: {
      colors: {
        primary: '#eef0f2',
        primaryLight: '#f8f8f8',
        primaryDark: '#e8e8e8',
        primaryText: '#5f6367',

        secondary: '#2196f3',
        secondaryLight: '#6ec6ff',
        secondaryDark: '#0069c0',
        secondaryText: '#ffffff',

        error: '#f44336',
        errorText: '#000000'
      },
      spacing: {
        none: 0,
        xs: 8,
        sm: 12,
        md: 20,
        lg: 36,
        xl: 74
      },
      fonts: {
        sans: 'Consolas'
      },
      fontSizes: {
        xs: 14,
        sm: 17,
        md: 18,
        lg: 22,
        xl: 30,
        xxl: 42,
        xxxl: 60
      },
      borderRadius: {
        lg: 10,
        xl: 10
      },
      icons: {
        logo: {
          icon: (props: any) => (
            <svg viewBox="0 0 581 581.35816" {...props}>
              <path d="m329.398438 367.980469c0 53.476562 43.351562 96.828125 96.828124 96.828125 53.472657 0 96.824219-43.351563 96.824219-96.828125 0-53.472657-43.351562-96.824219-96.824219-96.824219-53.453124.058594-96.769531 43.375-96.828124 96.824219zm96.828124-77.460938c42.78125 0 77.460938 34.679688 77.460938 77.460938s-34.679688 77.460937-77.460938 77.460937-77.460937-34.679687-77.460937-77.460937c.046875-42.757813 34.699219-77.414063 77.460937-77.460938zm0 0" />
              <path d="m370.898438 561.636719h110.664062v19.363281h-110.664062zm0 0" />
              <path d="m329.398438 522.902344h193.65625v19.367187h-193.65625zm0 0" />
              <path d="m116.378906 522.902344h19.367188v19.367187h-19.367188zm0 0" />
              <path d="m58.285156 542.269531h19.363282v19.367188h-19.363282zm0 0" />
              <path d="m117.347656 468.417969c50.558594-88.054688 82.28125-185.652344 93.15625-286.605469l90.050782 89.515625c1.800781 1.792969 4.234374 2.804687 6.777343 2.816406.523438.003907 1.050781-.039062 1.566407-.125 3.070312-.5 5.710937-2.445312 7.097656-5.226562 18.253906-36.433594 11.105468-80.464844-17.738282-109.25l-7.917968-7.921875h68.105468c5.347657.003906 9.6875-4.328125 9.6875-9.675782.003907-1.046874-.167968-2.085937-.496093-3.074218-12.859375-38.671875-49.046875-64.75-89.800781-64.710938h-12.585938l48.355469-48.636718c3.773437-3.789063 3.757812-9.917969-.03125-13.691407-.734375-.730469-1.578125-1.339843-2.503907-1.800781-36.449218-18.273438-80.503906-11.128906-109.308593 17.730469l-9.246094 9.246093c-3.015625 3.035157-5.816406 6.269532-8.394531 9.683594-2.546875-3.414062-5.328125-6.648437-8.320313-9.683594l-9.246093-9.246093c-28.78125-28.839844-72.8125-35.984375-109.238282-17.730469-4.785156 2.390625-6.726562 8.207031-4.335937 12.988281.460937.925781 1.070312 1.769531 1.800781 2.503907l48.410156 48.636718h-12.710937c-40.753907-.039062-76.945313 26.039063-89.800781 64.710938-1.695313 5.070312 1.042968 10.554687 6.117187 12.25.988281.332031 2.027344.5 3.074219.5h68.039062l-7.917968 7.921875c-28.84375 28.785156-35.992188 72.816406-17.742188 109.25 1.390625 2.78125 4.03125 4.726562 7.097656 5.226562.519532.085938 1.042969.128907 1.570313.125 2.558593 0 5.011719-1.011719 6.824219-2.816406l83.855468-83.359375c-10.382812 92.785156-45.328125 181.121094-101.234375 255.894531-13.015625-3.417969-26.210937-6.109375-39.523437-8.054687l-6.050782-.609375-1.9375 19.277343 5.644532.550782c9.683594 1.386718 19.304687 3.34375 28.875 5.558594-1.9375 2.429687-3.875 4.898437-5.878906 7.292968l14.851562 12.421875c74.410156-88.46875 118.769531-198.300781 126.671875-313.632812l11.144531-11.074219 8.34375 8.296875c-10.179687 123.339844-52.515625 241.859375-122.785156 343.734375l15.859375 11.097656c7.613281-10.867187 14.875-22.144531 21.914063-33.636718 45.292968 21.664062 85.285156 52.996093 117.160156 91.789062l14.976562-12.269531c-18.847656-22.914063-40.441406-43.425781-64.300781-61.066407h405.820313v-19.367187h-434.507813c-9.492187-5.730469-19.289063-10.921875-29.292969-15.753906zm186.429688-221.210938-102.304688-101.714843c26.167969-7.8125 54.511719-.722657 73.917969 18.492187l9.246094 9.25c19.371093 19.335937 26.699219 47.667969 19.140625 73.972656zm39.894531-114.949219h-80.171875c-18.671875-8.886718-39.738281-11.402343-59.976562-7.15625 14.089843-19.8125 36.894531-31.578124 61.207031-31.574218h13.070312c27.371094-.042969 52.601563 14.792968 65.871094 38.730468zm-137.496094-81.558593 9.25-9.246094c19.351563-19.375 47.695313-26.707031 74.011719-19.144531l-57.398438 57.738281c-18.628906 6.855469-34.621093 19.410156-45.710937 35.875-4.503906-23.6875 2.925781-48.078125 19.878906-65.222656zm-53.339843-9.246094 9.246093 9.246094c4.3125 4.402343 8.054688 9.332031 11.136719 14.667969-4.386719 10.199218-6.890625 21.101562-7.398438 32.1875-8.691406-7.59375-18.703124-13.523438-29.53125-17.507813l-57.410156-57.738281c26.308594-7.558594 54.644532-.226563 73.984375 19.144531zm-62.386719 52.074219h13.074219c24.328124-.023438 47.164062 11.738281 61.269531 31.5625-20.226563-4.230469-41.285157-1.714844-59.945313 7.167968h-80.203125c13.265625-23.925781 38.476563-38.757812 65.835938-38.730468zm-25.910157 153.679687c-7.558593-26.304687-.226562-54.636719 19.144532-73.972656l9.246094-9.25c13.929687-13.894531 32.820312-21.671875 52.5-21.609375 7.261718.003906 14.484374 1.039062 21.457031 3.078125zm0 0" />
            </svg>
          ),
          height: 50,
          fill: 'secondaryDark'
        },
        cart: {
          icon: (props: any) => (
            <svg viewBox="0 0 486.569 486.569" {...props}>
              <path
                d="M146.069,320.369h268.1c30.4,0,55.2-24.8,55.2-55.2v-112.8c0-0.1,0-0.3,0-0.4c0-0.3,0-0.5,0-0.8c0-0.2,0-0.4-0.1-0.6
		c0-0.2-0.1-0.5-0.1-0.7s-0.1-0.4-0.1-0.6c-0.1-0.2-0.1-0.4-0.2-0.7c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.1-0.4-0.2-0.6
		c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.3-0.4-0.4-0.6
		c-0.1-0.2-0.2-0.3-0.4-0.5c-0.1-0.2-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.5s-0.3-0.3-0.4-0.4c-0.2-0.2-0.3-0.3-0.5-0.5
		c-0.2-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.3-0.2-0.5-0.3s-0.4-0.2-0.6-0.4c-0.2-0.1-0.4-0.2-0.6-0.3
		s-0.4-0.2-0.6-0.3s-0.4-0.2-0.6-0.3s-0.4-0.1-0.6-0.2c-0.2-0.1-0.5-0.2-0.7-0.2s-0.4-0.1-0.5-0.1c-0.3-0.1-0.5-0.1-0.8-0.1
		c-0.1,0-0.2-0.1-0.4-0.1l-339.8-46.9v-47.4c0-0.5,0-1-0.1-1.4c0-0.1,0-0.2-0.1-0.4c0-0.3-0.1-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8
		c0-0.2-0.1-0.3-0.1-0.5c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.1-0.3-0.2-0.4
		c-0.1-0.2-0.2-0.4-0.4-0.6c-0.1-0.2-0.2-0.3-0.3-0.5s-0.2-0.3-0.3-0.5s-0.3-0.4-0.4-0.6c-0.1-0.1-0.2-0.2-0.3-0.3
		c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.4-0.7-0.6c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.4-0.3-0.6-0.5
		c-0.3-0.2-0.6-0.4-0.8-0.5c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.4-1.3-0.6l-73.7-31c-6.9-2.9-14.8,0.3-17.7,7.2
		s0.3,14.8,7.2,17.7l65.4,27.6v61.2v9.7v74.4v66.5v84c0,28,21,51.2,48.1,54.7c-4.9,8.2-7.8,17.8-7.8,28c0,30.1,24.5,54.5,54.5,54.5
		s54.5-24.5,54.5-54.5c0-10-2.7-19.5-7.5-27.5h121.4c-4.8,8.1-7.5,17.5-7.5,27.5c0,30.1,24.5,54.5,54.5,54.5s54.5-24.5,54.5-54.5
		s-24.5-54.5-54.5-54.5h-255c-15.6,0-28.2-12.7-28.2-28.2v-36.6C126.069,317.569,135.769,320.369,146.069,320.369z M213.269,431.969
		c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S213.269,416.769,213.269,431.969z M428.669,431.969
		c0,15.2-12.4,27.5-27.5,27.5s-27.5-12.4-27.5-27.5s12.4-27.5,27.5-27.5S428.669,416.769,428.669,431.969z M414.169,293.369h-268.1
		c-15.6,0-28.2-12.7-28.2-28.2v-66.5v-74.4v-5l324.5,44.7v101.1C442.369,280.769,429.669,293.369,414.169,293.369z"
              />
            </svg>
          ),
          fill: 'secondary',
          css: {
            strokeWidth: 5
          }
        }
      } as any,
      components: {
        searchbarLayout: {
          gridTemplate: '"logo cart login" / 1fr auto auto',
          alignItems: 'center',
          css: {
            justifyItems: 'center'
          }
        },
        productListLayout: {
          gridTemplateColumns: 'repeat(auto-fill,minmax(420px,1fr))',
          gridAutoRows: '340px',
          gridGap: 'lg'
        },
        bannerLayout: {
          display: 'none'
        },
        navbar: {
          bgFullWidth: 'transparent',
          bg: 'secondary',
          borderRadius: 'xl',
          mt: 'sm',
          justifyContent: 'center'
        },

        productDetailsLayout: {
          p: 'md',
          gridTemplateColumns: {
            md: '1fr 1fr'
          },
          gridTemplateAreas: {
            md:
              '"sku gallery" "title gallery" "price gallery" "options gallery" "cta gallery" "description gallery" "meta gallery"'
          }
        }
      }
    }
  },
  {
    name: 'Dark',
    theme: {
      colors: {
        primary: '#616161',
        primaryLight: '#8e8e8e',
        primaryDark: '#373737',
        primaryText: '#fff',

        // secondary: '#546e7a',
        // secondaryLight: '#819ca9',
        // secondaryDark: '#29434e',

        errorText: '#000000',
        black: '#9b9aa0'
      },

      components: {
        root: {
          bg: 'primaryLight',
          color: 'white'
        },
        sidebarLayout: {
          bg: 'primaryLight'
        },
        footerSectionLayout: {
          bgFullWidth: 'primary'
        },
        newsletterLayout: {
          bgFullWidth: 'primary'
        },
        dropdownMenu: {
          bg: 'primaryLight'
        }
      }
    }
  }
];
