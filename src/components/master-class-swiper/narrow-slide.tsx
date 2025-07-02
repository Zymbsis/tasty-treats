import * as motion from "motion/react-client";
import Image, { ImageProps } from "next/image";

const NarrowSlide = ({ alt, ...props }: ImageProps) => (
  <motion.div
    initial={{ opacity: 0, y: "100%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="bg-slide relative w-[80px] rounded-lg md:w-[137px]"
  >
    <Image
      alt={alt}
      fill
      priority
      className="rounded-hero-lg object-cover"
      unoptimized
      {...props}
    />
  </motion.div>
);

export default NarrowSlide;
