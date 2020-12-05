import { defineComponent } from 'vue'
import HelloWord from '../components/HelloWorld'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <h1>About</h1>
        <HelloWord />
      </>
    )
  },
})
