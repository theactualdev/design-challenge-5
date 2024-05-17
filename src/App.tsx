import './App.css'
import firstImage from './assets/imageone.svg';
import secondImage from './assets/imagetwo.svg';
import thirdImage from './assets/imagethree.svg';

function App() {
  let date = new Date();
  let year = date.getFullYear();

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
    <div className="wrapper px-5">
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
    </div>
    <footer className='bg-[#252525] text-white flex justify-around mt-4'>
      Copyright &copy; theactualdev { year }
      <a href="https://www.figma.com/design/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?node-id=868%3A162&t=MVW2uQ3uug4nJCGq-1">Figma</a>
    </footer>
    </>
  )
}

export default App
