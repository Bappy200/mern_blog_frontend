import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Layout } from '../../components'
import { blog1 } from '../../importImage';
import "./CreateBlog.css"
function CreateBlog() {
    const [blogImage, setBlogImage] = useState()
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
       console.log(data)
    };
    return (
        <Layout>
            <div className='create_blog_secation container'>
                <div className='create_blog_secation_img'>
                    <img src={blog1} alt="blogImage" />
                </div>
                
                <form className='register_content_form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='register_conent_from_input'>
                        <label>Image</label>
                        <input type="file" {...register("blogImage", {required:true})} />
                        {errors.blogImage && <span className='error_login'>Profile is not valid</span>} 
                    </div>
                    <div className='register_conent_from_input'>
                        <label>Title</label>
                        <input type="text" {...register("tittle", {required:true, min:10, max:200})} />
                        {errors.title && <span className='error_register'>User name is not valid.</span>}
                    </div>
                    <div className='register_conent_from_input'>
                        <label>Category Hash Tag</label>
                        <input type="text" {...register("category", {required:true, min:2, max:20})} />
                        {errors.category && <span className='error_register'>Category is not valid.</span>}
            
                    </div>
                    <div className='create_blog_conent_from_input'>
                        <label>Descption</label>
                        <textarea  {...register("desc", {required:true, min:20})} />
                        {errors.desc && <span className='error_register'>Descption is not valid.</span>}
            
                    </div>
                    
                    <input className='register_submit' type="submit" />
                </form>
            </div>
        </Layout>
    )
}

export default CreateBlog