import { IoDocumentText } from 'react-icons/io5';

interface Props {
  title: string;
  file: string;
  titleFile: string;
}

const Document: React.FC<Props> = ({ title, file, titleFile }) => {
  return (
    <div className='mx-4 mb-10 mt-10 md:mx-24'>
      <div className='flex flex-col items-center space-y-6 font-semibold'>
        <div className='flex items-center space-x-4'>
          <IoDocumentText size={35} className='text-[#ffba00]' />
          <div className='bg-black text-3xl text-[#ffba00]'>
            <div>{title}</div>
          </div>
        </div>

        <div className='mt-8 w-full'>
          <div className='text-center text-xl text-white'>{titleFile}</div>
          <div className='mt-8 aspect-video w-full'>
            <iframe
              src={file}
              title={titleFile}
              className='h-full w-full rounded-xl border-2 border-[#ffba00]'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
