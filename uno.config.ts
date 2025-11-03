import { defineConfig } from 'unocss'
import presetUno from 'unocss/preset-uno'
import presetAttributify from 'unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // Basic recommended presets: Uno + Attributify
  presets: [
    presetUno(),
    presetAttributify(),
    // Icons preset with autoInstall enabled: when you use an icon collection
    // that is missing locally, UnoCSS will try to install it for you.
    presetIcons({
      scale: 1,
      extraProperties: {
        display: 'inline-block',
        // keep icons vertically aligned with text
        'vertical-align': 'middle',
        // default size and color — use CSS variables for easy overrides
        // Use `--icon-size` and `--icon-color` in your components or global CSS
        'font-size': 'var(--icon-size, 1em)',
        'background-color': 'var(--icon-color, currentColor)'
      },
      // <-- enable auto-install of icon collections when referenced
      autoInstall: true
    })
  ]
})
