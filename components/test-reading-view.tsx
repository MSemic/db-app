import React, { useState } from 'react';
// import { Slider } from '@/components/ui/slider';

const QuranApp = () => {
  const [fontSize, setFontSize] = useState(20);

  //   const handleFontSizeChange = (value) => {
  //     setFontSize(value[0]);
  //   };

  const verses = [
    { text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', number: 1 },
    { text: 'الرَّحْمَٰنِ الرَّحِيمِ', number: 2 },
    { text: 'مَالِكِ يَوْمِ الدِّينِ', number: 3 },
    { text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', number: 4 },
    { text: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ', number: 5 },
    {
      text: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      number: 6,
    },
  ];

  return (
    <div
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md"
      dir="rtl"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri&display=swap');
      `}</style>
      <div className="text-center text-2xl mb-6 font-amiri">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <div
        className="font-amiri"
        style={{ fontSize: `${fontSize}px`, lineHeight: '2.5' }}
      >
        {verses.map((verse, index) => (
          <span key={index} className="inline">
            {verse.text}
            <span className="text-sm text-amber-800 align-super mr-1">
              ﴿{verse.number}﴾
            </span>{' '}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size: {fontSize}px
        </label>
        {/* <Slider
          defaultValue={[fontSize]}
          max={40}
          min={12}
          step={1}
          onValueChange={handleFontSizeChange}
        /> */}
      </div>
    </div>
  );
};

export default QuranApp;
