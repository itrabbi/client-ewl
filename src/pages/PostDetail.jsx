import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from "../images/blog6.jpg"

function PostDetail() {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This Is Post Titile</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quae dolorum odit, consequuntur explicabo ut dignissimos ratione, labore saepe corrupti omnis officia a mollitia dolore tempore repudiandae veniam dolor non neque ducimus fugiat voluptatibus quisquam!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quia vel non a et corporis quidem, blanditiis est minima facere delectus? Odio ut exercitationem consequatur maiores enim nostrum id perspiciatis, optio neque sint, tempora totam rem voluptates ad ipsa repellendus perferendis laudantium quisquam libero cumque error! Ab vero incidunt est. Tempore sunt deserunt error eum dolore sequi quae culpa dolorum, aliquam alias aut enim delectus esse beatae dicta? Veniam dolorem, ipsum obcaecati eum adipisci vel animi quaerat dolore error alias quibusdam qui sint quos nemo minus hic id ab accusamus! Doloribus cum consectetur magnam soluta. Itaque earum molestias temporibus dolor dicta eum voluptates tempora.
          </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dolore ratione neque vero eum officiis temporibus voluptatem natus quas hic! Distinctio sed veniam, iste laborum consequuntur quas quod delectus nihil soluta, autem explicabo rem voluptatem non nostrum! Culpa, quae vero. Provident libero hic, voluptatum dolores eos error iusto itaque aliquam fugit corporis assumenda consequatur obcaecati.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis repudiandae eos placeat porro minima sequi, inventore natus distinctio aliquam voluptates repellat ipsum enim quia suscipit laudantium perferendis? Quam rerum provident incidunt laudantium. Sapiente similique ipsa earum totam ab quia nisi, aliquam provident. Explicabo quis dignissimos ut. Qui sed exercitationem assumenda fugiat. Aliquam provident placeat eos enim dolorum consequuntur asperiores voluptatem accusamus id ipsum commodi ducimus fuga vitae nam animi, repellendus iure, maiores aliquid quisquam. Fugiat quia eius a, reprehenderit modi soluta aperiam eligendi magnam ullam saepe laborum necessitatibus culpa distinctio quos accusamus. Assumenda, eaque distinctio? Explicabo, sed deleniti ipsa assumenda at obcaecati necessitatibus doloribus pariatur, maxime sint asperiores, nisi provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus aliquid ut voluptas at? Ullam impedit ea dolore minus mollitia.
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam animi a! Minima a, mollitia laborum corporis vero iure impedit animi molestias iusto deleniti maxime unde fugiat illo maiores obcaecati sapiente facilis harum tempora labore voluptatum amet ipsam itaque voluptates! Voluptate vel explicabo alias omnis? Quod accusantium possimus sit in dignissimos doloremque. Harum et quo saepe doloribus veritatis cumque, dolorum provident porro corrupti eligendi, itaque magni, ad odit numquam. Culpa nesciunt, excepturi ab ea assumenda aut ratione quod porro est dicta voluptatem neque dolores hic quasi ipsa placeat consequuntur fugit iure explicabo fuga, ex repellendus dolore ducimus? Laboriosam et eaque similique accusamus, modi rerum id vel, a, porro repellendus pariatur repellat animi nihil ipsum cumque placeat aperiam tempore. Iure exercitationem eius quae laudantium soluta. Sequi officiis, perferendis laboriosam atque doloribus culpa voluptate quidem tempora aperiam soluta quisquam voluptatum ullam facere harum unde, magni possimus dicta nostrum natus! Eligendi modi, omnis tenetur voluptatem consequatur voluptatibus, dignissimos illum odit incidunt, nulla voluptates pariatur fugiat. Autem repellat cupiditate mollitia sed odit sit illo tempora, quibusdam pariatur officia quos ullam eos dicta eius libero, vero iusto consectetur assumenda amet. Architecto possimus illo perspiciatis aliquam nemo minus earum suscipit laudantium id, magnam, omnis officia qui!</p>
      </div>
    </section>
  )
}

export default PostDetail
