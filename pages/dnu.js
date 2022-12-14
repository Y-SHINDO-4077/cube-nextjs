import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import DNUSetion from 'components/dnu_section'
import PolicySetion from 'components/policy_section'
import Posts from 'components/posts'
import READMORE from 'components/readmore'
import NextBTN from 'components/nextbtn'
import styles from '../styles/scss/me.module.scss'
import readstyles from '../styles/scss/readmore.module.scss'




import Image from 'next/image'
import eyecatch from 'images/about.jpg'


export default function DNU({posts}) {
  return (
      <>
        <Meta pageTitle="DNU" pageDesc="About development activities"/>
        <DNUSetion/>
        <Container>
        <PolicySetion title="What’s DNU?" en__content="" ja__content="2009年に開校した、
「ナゴヤ(東海三県)のまちがまるごとキャンパス」を謳い、学びの場を提供するNPO。毎月第二土曜日に「大ナゴヤの日」を開催したり、「歩くまちには何がある？」というコンセプトを掲げた「まちシル」など、さまざまな活動を行っている。"/>
        <div className={readstyles.readmore}>
          <a href='https://dai-nagoya.univnet.jp/' taeget="_blank">
            <span>HPはこちら</span>
          </a>
        </div>
        </Container>
        <Container>
        <PolicySetion title="Why involve DNU?" en__content="" ja__content="大学時代、地元名古屋のことを聞かれて何も答えられなかったのをきっかけに、「名古屋の魅力ってなんだろう？」と思い、Google検索して見つけたのが大ナゴヤ大学。世代や職種を超えたボランティアスタッフのみなさんとの交流や授業への参加により、みずからの視野が広がったり、ナゴヤの街を楽しく暮らすことができたりするようになりました。「自分のやりたいこと、好きなことを堂々と言ってよい」という気づきを与えられたり、人生の選択に多大な影響を与えてくれたりするなど、この団体にはお世話になっています。"/>
        </Container>
        <Container>
          <Hero
            title="WORKS"
            subtitle=""
          />
          {/* <Posts posts={posts} /> */}
          <READMORE url="/work" />
        </Container>
        {/* <NextBTN url="/works" sec_title="WORKS"></NextBTN> */}
      </>
  )
}
