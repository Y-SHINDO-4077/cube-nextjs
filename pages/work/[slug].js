import { getPostBySlug, getAllSlugs } from 'lib/api'
import Link from 'next/link'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'

import ConvertBody from 'components/convert-body'

import { eyecatchLocal } from 'lib/constants'
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post'
import Pagination from 'components/pagination'
import PostCategories from 'components/post-categories'
import styles from '../../styles/scss/work_single.module.scss'

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()
    return {
        paths: allSlugs.map(({ slug }) => `/work/${slug}`),
        fallback: false,
    }
}


export default function Schedule({
    title,
    publish,
    en_title,
    //content,
    eyecatch,
    eyecatch02,
    categories,
    productYear,
    role,
    items01,
    content01,
    items02,
    content02,
    items03,
    content03,
    items04,
    content04,
    url,
    prevPost,
    nextPost,
}) {
return (
    <>
        <figure>
        <Image
        key={eyecatch.url}
        src={eyecatch.url}
        alt=""
        layout="responsive"
        width={eyecatch.width}
        height={eyecatch.height}
        sizes="100vw"
        objectFit="cover"
        priority
        placeholder="blur"
        blurDataURL={eyecatch.blurDataURL}
        />
        </figure>
        <Container>
            <article>
            <PostHeader title={title} en_title={en_title} productYear={productYear} role={role}/>
               
                    <PostBody>
                        <h3 className={styles.heading3}>
                           <ConvertBody contentHTML={items01} />
                        </h3>
                       
                           <ConvertBody contentHTML={content01} />
                        
                        <h3 className={styles.heading3}>
                          <ConvertBody contentHTML={items02} />
                        </h3>
                        
                          <ConvertBody contentHTML={content02} />
                        
                        <h3 className={styles.heading3}>
                          <ConvertBody contentHTML={items03} />
                        </h3>
                        
                          <ConvertBody contentHTML={content03} />
                        
                        {items04 && 
                        <h3 className={styles.heading3}>
                          <ConvertBody contentHTML={items04} />
                        </h3>
                        }
                        {content04 &&
                            <ConvertBody contentHTML={content04} />
                        }
                        {url &&
                            <div className={styles.morebtn}>
                                <a href="{url}" className={styles.viewmore}>
                                VIEW MORE
                                </a>
                            </div>
                        }

                        <figure>
                            <Image
                            key={eyecatch02.url}
                            src={eyecatch02.url}
                            alt=""
                            layout="responsive"
                            width={eyecatch02.width}
                            height={eyecatch02.height}
                            sizes="100%"
                            priority 
                            />
                        </figure>
                        
                        
                    </PostBody>
                 
                        {/* <PostCategories categories={categories} /> */}
                 
                <Pagination
                prevText={prevPost.title}
                prevUrl={`/work/${prevPost.slug}`}
                nextText={nextPost.title}
                nextUrl={`/work/${nextPost.slug}`}
                />
            </article>
        </Container>
    </>
)
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    const post = await getPostBySlug(slug)
    //const description = extractText(post.content)
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)
    return {
        props: {
        title: post.title,
        en_title:post.en_title,
        publish: post.publishDate,
        // content: post.content,
        eyecatch: eyecatch,
        eyecatch02: post.eyecatch02 ? post.eyecatch02 : "" ,
        categories: post.categories,
        productYear:post.productYear,
        role:post.role,
        items01:post.items01,
        content01:post.content01,
        items02:post.items02,
        content02:post.content02,
        items03:post.items03,
        content03:post.content03,
        items04:post.items04 ? post.items04 :""  ,
        content04:post.content04 ? post.content04 : "",
        url:post.url ?  post.url : "",
        //description: description,
        prevPost: prevPost,
        nextPost: nextPost,
        },
    }
}
