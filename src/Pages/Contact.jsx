import React, { useEffect } from "react";
import { Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleZaloClick = () => {
    window.open('https://zalo.me/096623454', '_blank');
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%]">
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Liên Hệ Gia Sư
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          Quý phụ huynh có thể liên hệ trực tiếp qua Zalo để được tư vấn chi tiết về khóa học.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center"
        id="Contact"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 hover:shadow-[#6366f1]/10">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block relative group mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tư Vấn Khóa Học CNTT
              </h3>
              <p className="text-gray-400 text-lg">
                Liên hệ ngay để được tư vấn miễn phí và đăng ký khóa học phù hợp cho con bạn
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                {/* Contact Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">Zalo</h4>
                      <p className="text-gray-400">Liên hệ trực tiếp</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-medium">Tư vấn miễn phí</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Sparkles className="w-5 h-5 text-green-400" />
                      <span className="text-white font-medium">Đăng ký khóa học</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Contact Button */}
                <div className="flex-1 text-center">
                  <button
                    onClick={handleZaloClick}
                    className="group relative w-full max-w-sm mx-auto"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                      <span>0966 234 54</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                  
                  <p className="text-gray-400 text-sm mt-4">
                    Nhấn để mở Zalo và liên hệ ngay
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm">Trả lời trong vòng 5 phút</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;