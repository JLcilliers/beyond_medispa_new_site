import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Award, Zap, Heart, MapPin, Phone, Clock, Mail } from 'lucide-react';

export const MaintenancePage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      window.location.reload();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight mb-6">
              We're Getting <span className="text-[#C6A77D]">Ready</span>
            </h1>

            <p className="text-2xl text-[#C6A77D] font-light mb-8">
              Our new website is launching soon
            </p>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              We're working hard to bring you an enhanced online experience. In the meantime,
              our clinics remain open and ready to serve you. Please contact us directly to book
              your consultation or treatment.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
                <span className="text-sm">CQC Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
                <span className="text-sm">Doctor-Led Treatments</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-2 h-2 bg-[#C6A77D] rounded-full"></div>
                <span className="text-sm">15+ Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFFFFF] via-[#FAF8F5] to-[#F5F1EC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-[#333333] mb-6">
              Why Choose <span className="text-[#A38E78]">Beyond MediSpa</span>
            </h2>
            <p className="text-xl text-[#777777] max-w-3xl mx-auto">
              Expert aesthetic medicine and personalized care at prestigious locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Award className="w-10 h-10 text-[#A38E78]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Expert Practitioners</h3>
              <p className="text-[#777777] leading-relaxed">
                Our team of highly qualified doctors and aesthetic practitioners bring years of expertise
                and a commitment to excellence in every treatment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-10 h-10 text-[#A38E78]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Advanced Technology</h3>
              <p className="text-[#777777] leading-relaxed">
                We invest in the latest aesthetic technologies and techniques to deliver safe,
                effective treatments with natural-looking results.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#A38E78]/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-[#A38E78]" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">Personalized Care</h3>
              <p className="text-[#777777] leading-relaxed">
                Every client receives a bespoke treatment plan tailored to their unique goals,
                ensuring exceptional results and complete satisfaction.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-[#A38E78]/5 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-light text-[#333333] mb-6">
                  Two Premium Locations
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#A38E78] font-semibold text-lg mb-2">London Clinic</h4>
                    <p className="text-[#777777]">
                      Located in the heart of Harley Street, London's most prestigious medical district
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#A38E78] font-semibold text-lg mb-2">Edinburgh Clinic</h4>
                    <p className="text-[#777777]">
                      Situated on elegant Melville Street in Edinburgh's West End
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-[#A38E78] mb-1">500+</div>
                    <div className="text-sm text-[#777777]">Monthly Treatments</div>
                  </div>
                  <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-[#A38E78] mb-1">98%</div>
                    <div className="text-sm text-[#777777]">Client Retention</div>
                  </div>
                  <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-[#A38E78] mb-1">15+</div>
                    <div className="text-sm text-[#777777]">Expert Practitioners</div>
                  </div>
                  <div className="bg-[#A38E78]/10 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-[#A38E78] mb-1">2</div>
                    <div className="text-sm text-[#777777]">Premium Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Contact Section */}
      <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-4">
              Visit Our <span className="text-[#A38E78]">Clinics</span>
            </h2>
            <p className="text-xl text-[#777777] max-w-2xl mx-auto">
              Contact us to book your consultation or treatment
            </p>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* London Clinic */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-[#333333] mb-4">London</h3>
                  <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Address</h4>
                      <p className="text-[#777777]">Fourth floor Harvey Nichols, London SW1X 7RJ, United Kingdom</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Phone className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Phone</h4>
                      <a href="tel:03455481151" className="text-[#A38E78] hover:underline text-lg">
                        0345 548 1151
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Mail className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Email</h4>
                      <a href="mailto:info@beyondmedispa.com" className="text-[#A38E78] hover:underline text-lg">
                        info@beyondmedispa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Hours</h4>
                      <p className="text-[#777777]">Monday - Friday: 9:00 - 18:00</p>
                      <p className="text-[#777777]">Saturday: 9:00 - 17:00</p>
                      <p className="text-[#777777]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://www.phorest.com/salon/beyondmedispa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#A38E78] text-white px-6 py-3 rounded-lg hover:bg-[#8b7961] transition-colors text-center font-medium"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="https://www.google.com/maps?pb=!1m18!1m12!1m3!1d2483.628183492772!2d-0.1624627224548056!3d51.50169031111937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1758541805476!5m2!1sen!2sza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-200 text-[#333333] px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors text-center font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6281834927872!2d-0.16246272241142543!3d51.5016903111191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605397680ad09%3A0x68bb8e672eb273a1!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20MediSpa!5e0!3m2!1sen!2sza!4v1762848235130!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Edinburgh Clinic */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:order-2">
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold text-[#333333] mb-4">Edinburgh</h3>
                  <div className="w-20 h-1 bg-[#A38E78] mb-6"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <MapPin className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Address</h4>
                      <p className="text-[#777777]">Second Floor, harvey nichols, 30-34 St Andrew Sq, Edinburgh EH2 2AD, United Kingdom</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Phone className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Phone</h4>
                      <a href="tel:03455481151" className="text-[#A38E78] hover:underline text-lg">
                        0345 548 1151
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Mail className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Email</h4>
                      <a href="mailto:info@beyondmedispa.com" className="text-[#A38E78] hover:underline text-lg">
                        info@beyondmedispa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#A38E78]/20 p-3 rounded-full mr-4 mt-1">
                      <Clock className="w-5 h-5 text-[#A38E78]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#333333] mb-1">Hours</h4>
                      <p className="text-[#777777]">Monday - Friday: 9:00 - 18:00</p>
                      <p className="text-[#777777]">Saturday: 9:00 - 16:00</p>
                      <p className="text-[#777777]">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://www.phorest.com/salon/beyondmedispa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#A38E78] text-white px-6 py-3 rounded-lg hover:bg-[#8b7961] transition-colors text-center font-medium"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="https://www.google.com/maps?pb=!1m18!1m12!1m3!1d2233.678446141864!2d-3.194440922303394!3d55.954944976402295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1758541860806!5m2!1sen!2sza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-200 text-[#333333] px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors text-center font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden lg:order-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.678450134738!2d-3.1967369014958527!3d55.954944907201444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac0abf29af5%3A0xe8c125ae82237941!2sBeyond%20Aesthetic%20Clinic%20by%20Beyond%20Medispa!5e0!3m2!1sen!2sza!4v1762848225482!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light mb-4 text-[#C6A77D]">Beyond MediSpa</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expert aesthetic medicine and personalized care at prestigious locations in London and Edinburgh
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Beyond MediSpa. All rights reserved.
            </p>
          </div>

          {/* Hidden QA Login */}
          {!showLoginForm ? (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowLoginForm(true)}
                className="text-xs text-gray-600 hover:text-[#C6A77D] transition-colors"
              >
                Staff/QA Access
              </button>
            </div>
          ) : (
            <div className="max-w-md mx-auto mt-8 bg-gray-800 rounded-lg p-6">
              <h3 className="text-sm font-medium text-gray-300 mb-4 text-center">
                QA Access Login
              </h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter QA password"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#C6A77D] focus:border-transparent outline-none text-white placeholder-gray-400"
                  autoComplete="off"
                />
                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#C6A77D] text-white py-2 px-4 rounded-lg hover:bg-[#b89670] transition-colors font-medium"
                  >
                    Access Site
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginForm(false);
                      setPassword('');
                      setError('');
                    }}
                    className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};
