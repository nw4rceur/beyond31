import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ModalCarousel = ({ realisation, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="bg-white rounded-xl max-w-4xl w-full p-6 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl font-bold"
                >
                    ✕
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {realisation.images?.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={img}
                                alt={`Slide ${i}`}
                                className="w-full rounded-lg object-cover max-h-[70vh] mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </motion.div>
    );
};

export default ModalCarousel;
