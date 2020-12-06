import { defineComponent } from 'vue'

import './style/main.scss'

import top_ui from './assets/iphone12-5g_top_ui.jpg'
import show_01 from './assets/iphone12-5g_show_01.jpg'
import show_02 from './assets/iphone12-5g_show_02.jpg'
import show_03 from './assets/iphone12-5g_show_03.jpg'
import show_04 from './assets/iphone12-5g_show_04.jpg'
import show_05 from './assets/iphone12-5g_show_05.jpg'
import show_06 from './assets/iphone12-5g_show_06.jpg'
import show_07 from './assets/iphone12-5g_show_07.jpg'

export default defineComponent({
  name: 'App',
  mounted() {
    const rows = document.querySelectorAll('#ui ul li') as NodeListOf<HTMLElement>
    const html = document.documentElement

    document.addEventListener('scroll', (e) => {
      const scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)

      const total = 1 / rows.length

      for (let [index, row] of rows.entries()) {
        const start = total * index
        const end = total * (index + 1)

        let progress = (scrolled - start) / (end - start)
        if (progress >= 1) progress = 1
        if (progress <= 0) progress = 0

        row.style.setProperty('--progress', String(progress))
      }
    })
  },
  setup() {
    return () => (
      <>
        <h2>
          Superfast wireless
          <p>Hello 5G.</p>
        </h2>

        <div id="iphone">
          <div id="hardware"></div>
          <div id="ui">
            <img src={top_ui} class="top-ui" alt="" />
            <ul>
              <li>
                <img src={(show_01)} />
              </li>
              <li>
                <img src={show_02} />
              </li>
              <li>
                <img src={show_03} />
              </li>
              <li>
                <img src={show_04} />
              </li>
              <li>
                <img src={show_05} />
              </li>
              <li>
                <img src={show_06} />
              </li>
              <li>
                <img src={show_07} />
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  },
})
