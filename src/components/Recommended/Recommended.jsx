import { useNavigate } from 'react-router-dom'
import { allPosts } from '../../data'
import "./Recommended.css"
function Recommended({type, title}) {
    const navigate = useNavigate()

    const handlerClick = (blog)=>{
        navigate(`/blog/${blog.id}`, {state:{...blog}})
    }

  return (
    <div className='recommended_content'>
        <h5 className='recommendetions_title'>{title}</h5>
        <div className='recommendetions'>
            {
                allPosts.map((item)=> <div onClick={()=> handlerClick(item)} key={item.id} className='recommendetions_item'>
                <div className='recommendetions_item_info'>
                    <div className='recommendetions_item_info_user'>
                        <img src={item.userImage} alt="" />
                        <p>{item.user}</p>
                    </div>
                    <p className='recommendetions_item_info_date'>{item.date}</p>
                    <h5 className='recommendetions_item_info_title'>{item.name}</h5>
                    
                </div>
                <div className='recommendetions_item_img'>
                    <img src={item.image} alt="recom_image" />
                </div>
            </div>)
            }
        </div>
    </div>
  )
}

export default Recommended