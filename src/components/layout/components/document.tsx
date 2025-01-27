import { IoDocumentText } from 'react-icons/io5';

interface Props {
  title: string;
  file?: string;
  titleFile: string;
}

const Document: React.FC<Props> = ({ title, file, titleFile }) => {
  return (
    <div className='mx-4 mb-10 mt-10 md:mx-24 '>
      <div className='flex flex-col space-y-6 font-semibold'>
        <div className='flex space-x-4'>
          <IoDocumentText size={35} className='text-[#ffba00]' />
          <div className='text-3xl font-semibold'>
            <div>{title}</div>
          </div>
        </div>

        <div className='mt-8 w-full'>
          <div className='ml-14 text-xl '>{titleFile}</div>
          <div className='mt-8 aspect-video w-full'>
            <iframe src={file} title={titleFile} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
