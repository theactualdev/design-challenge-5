import './App.css'
import firstImage from './assets/imageone.svg';
import secondImage from './assets/imagetwo.svg';
import thirdImage from './assets/imagethree.svg';

function App() {
  let galleryList = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      image: firstImage
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      image: secondImage
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.",
      image: thirdImage
    }
  ]
  return (
    <>
    <div className="content mb-[69px] md:ml-24">
      <h1 className='text-[88px] font-bold max-w-[531px]'>Projects and practice</h1>
    </div>
    <div className="gallery flex justify-evenly md:flex-row flex-col">
      {galleryList.map((image, index) => (
        <div className="card max-w-[400px]">
          <p className='font-semibold text-[32px] opacity-40'>0{index}</p>
          <p className='font-semibold opacity-90'> {image.content} </p>
          <img src={image.image} alt="Image" />
        </div>
      ))}
    </div>
    </>
  )
}

export default App
