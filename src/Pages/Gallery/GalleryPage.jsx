import { useInfiniteQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroll-component';

const getImages = async ({ pageParam = 0 }) => {
    const res = await fetch(`/gallery.json?offset=${ pageParam }`);
    const data = await res.json();

    return { ...data, prevOffset: pageParam }


}


const GalleryPage = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["images"],
        queryFn: getImages,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage.totalCount) {
                return false;
            }
            return lastPage.prevOffset + 10;
        }

    })

console.log(data);

    const images = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.images]
    }, [])


    return (
        <div className='py-20 bg-white'>
                  <Helmet>
            <title> Fitness house | Gallery </title>
          </Helmet>
          <div className="flex justify-center items-center">
        <h2 className="font-bold bg-text-red px-3 py-2 text-center w-fit text-white  ">Gallery</h2>
        </div>
            <InfiniteScroll
                dataLength={ images ? images.length : 0 }
                next={ () => fetchNextPage() }
                hasMore={ hasNextPage }
                loading={ <div>Loading...☝️</div> }
            >
                <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center grid-cols-1  gap-5 my-10">
                    { images &&
                        images.map((article, idx) => {
                            return (
                               <div className='  flex justify-center items-center  h-[50vh]' key={ idx }>
                                    <img src={article.image} alt="" className='w--full h-full ' />
                                </div>
                            )
                        })

                    }

                </div>

            </InfiniteScroll>
        </div>
    );
};

export default GalleryPage;