import { defineComponent, onMounted } from 'vue'
import { useStore } from '/@/store'
import './AppleListFadeIn.scss'

import top_ui from './images/iphone12-5g_top_ui.jpg'
import show_01 from './images/iphone12-5g_show_01.jpg'
import show_02 from './images/iphone12-5g_show_02.jpg'
import show_03 from './images/iphone12-5g_show_03.jpg'
import show_04 from './images/iphone12-5g_show_04.jpg'
import show_05 from './images/iphone12-5g_show_05.jpg'
import show_06 from './images/iphone12-5g_show_06.jpg'
import show_07 from './images/iphone12-5g_show_07.jpg'

export default defineComponent({
  name: 'AppleListFadeIn',
  setup() {
    onMounted(() => {
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
    })

    const store = useStore()

    return () => (
      <>
        <h2>
          {store.state.title}
          <p>Hello 5G.</p>
        </h2>

        <div id="iphone">
          <div id="hardware"></div>
          <div id="ui">
            <img src={top_ui} class="top-ui" alt="" />
            <ul>
              <li>
                <img src={show_01} />
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
