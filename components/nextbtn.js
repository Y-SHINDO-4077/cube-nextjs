import Container from './container'
import styles from '../styles/scss/nextbtn.module.scss'



export default function NextBTN({url, sec_title ,largeFont = false ,}) {
  return (
    <section className={styles.nextbtn}>
      <Container>
        <div className={styles.readmore}>
          <a href={url}>
            <span>NEXT {sec_title}</span>
          </a>
        </div>
      </Container>
    </section>
  )
}
