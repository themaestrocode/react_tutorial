import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import RTE from '../RTE'
import appwriteService from '../../appwrite/blog.js'
import Select from '../Select'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) { // for Post update
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined})

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
    } else { // for New Post creation
      const file = await appwriteService.uploadFile(data.image[0])

      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId // create a new field in the data object
        const dbPost = await appwriteService.createPost({...data, userId: userData.$id})

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }

      }
    }
  }

  const generateSlug = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
  }, []);

  useEffect(() => {
    watch((value, {name}) => {
      if (name === "title") {
        setValue("slug", generateSlug(value.title), {shouldValidate: true});
      }
    });
  }, [watch, generateSlug, setValue]);
  
  return (
    <form
    onSubmit={handleSubmit(submit)}
    className='flex flex-wrap'
    >
      <div
      className='w-2/3 px-2'
      >
        <Input
        label="Title"
        placeholder="Enter post title"
        className="mb-4"
        {...register("title", {required: true})}
        />
        <Input
        label="Slug"
        placeholder="slug"
        className="mb-4"
        {...register("slug", {required: true})}
        onInput={(e) => {
          setValue("slug", generateSlug(e.currentTarget.value), {shouldValidate: true});
        }}
        />
        <RTE
        control={control}
        name="content"
        label="Content: "
        defaultValue={getValues("content")}
        />
      </div>

      <div
      className='1/3 px-2'
      >
        <Input 
        label="Featured Image"
        type="file"
        className="mb-4"
        accept="image/*"
        {...register("featuredImage", {required: !post})}
        />
        { post && (
          <div className='w-full mb-4'>
            <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className='rounded-lg'
            />
          </div>
        )}
        <Select
        label="Status"
        className="mb-4"
        options={["active", "inactive"]}
        {...register("status", {required: true})}
        />
        <Button
        type="submit"
        bgColor={post ? 'bg-blue-500' : 'bg-green-500'}
        className="w-full"
        >
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm