import React, { useState } from 'react';
import { Copy, Check, Loader2 } from 'lucide-react';

export default function FreelanceProposalAssistant() {
  const [jobDescription, setJobDescription] = useState('');
  const [proposalLength, setProposalLength] = useState<'short' | 'medium'>('medium');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'expert'>('intermediate');
  const [platform, setPlatform] = useState<'upwork' | 'mostaql'>('upwork');
  const [clientName, setClientName] = useState('');
  const [generatedProposal, setGeneratedProposal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const generateProposal = async () => {
    if (!jobDescription.trim()) {
      setError(platform === 'mostaql' ? 'الرجاء إدخال وصف المشروع' : 'Please enter a job description');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedProposal('');

    try {
      // Word count targets based on selection
      const wordCounts = {
        short: platform === 'mostaql' ? '50-70 كلمة' : '60-80 words',
        medium: platform === 'mostaql' ? '100-150 كلمة' : '120-180 words'
      };

      // Experience level context
      const experienceContext = {
        beginner: platform === 'mostaql' 
          ? 'أنت مستقل مبتدئ متحمس للتعلم وتقديم عمل ذو جودة عالية. أظهر الحماس والرغبة في النمو.'
          : 'You are a beginner freelancer who is eager to learn and deliver quality work. Show enthusiasm and willingness to grow.',
        intermediate: platform === 'mostaql'
          ? 'أنت مستقل متوسط الخبرة بمهارات جيدة وخبرة عملية مثبتة. أظهر الثقة والكفاءة.'
          : 'You are an intermediate freelancer with solid skills and some proven experience. Show confidence and capability.',
        expert: platform === 'mostaql'
          ? 'أنت مستقل خبير بخبرة واسعة وسجل حافل بالإنجازات. أظهر السلطة والخبرة العميقة.'
          : 'You are an expert freelancer with extensive experience and a strong track record. Show authority and deep expertise.'
      };

      // Platform-specific prompts
      const platformPrompts = {
        upwork: `You are an expert freelance proposal writer specializing in Upwork proposals. Your task is to write natural, human-sounding proposals that win clients.

CRITICAL RULES:
1. Write in a conversational, professional tone - like a real person would write
2. NEVER use these robotic phrases:
   - "I am a highly skilled professional"
   - "With years of experience"
   - "I have extensive experience"
   - "I am confident I can help"
   - Any generic, templated language
3. Be specific to the job, not generic
4. Sound calm, clear, and professional
5. Don't be salesy or use emojis
6. Don't exaggerate or oversell
7. Write in plain text - no markdown, no bullet points
8. Make it ready to send without editing
${clientName.trim() ? `9. Start with a personalized greeting using the client's name: "${clientName.trim()}"` : ''}

STRUCTURE:
${clientName.trim() ? '- Start with a natural greeting using the client\'s name (e.g., "Hi [Name]," or "Hello [Name],")\n' : ''}- Brief acknowledgment of their need (rewritten professionally)
- How you'll approach it (specific to their job)
- Relevant experience (natural mention, not boastful)
- Clear next step or question

TARGET LENGTH: ${wordCounts[proposalLength]}
EXPERIENCE LEVEL: ${experienceContext[experienceLevel]}`,

        mostaql: `أنت كاتب عروض احترافي متخصص في كتابة عروض منصة مستقل. مهمتك كتابة عروض طبيعية تبدو إنسانية وتكسب العملاء.

قواعد حاسمة:
1. اكتب بنبرة احترافية ومحادثة طبيعية - كما يكتب شخص حقيقي
2. لا تستخدم أبداً هذه العبارات الآلية:
   - "أنا محترف ذو مهارات عالية"
   - "لدي سنوات من الخبرة"
   - "لدي خبرة واسعة"
   - "أنا واثق أنني أستطيع المساعدة"
   - أي لغة نموذجية أو عامة
3. كن محدداً للمشروع، وليس عاماً
4. اكتب بوضوح وهدوء واحترافية
5. لا تكن بائعاً ولا تستخدم الرموز التعبيرية
6. لا تبالغ أو تفرط في البيع
7. اكتب بنص عادي - بدون تنسيق أو نقاط
8. اجعله جاهزاً للإرسال بدون تعديل
${clientName.trim() ? `9. ابدأ بتحية شخصية باستخدام اسم العميل: "${clientName.trim()}"` : ''}

البنية:
${clientName.trim() ? '- ابدأ بتحية طبيعية باستخدام اسم العميل (مثلاً "مرحباً ${clientName.trim()}،" أو "أهلاً ${clientName.trim()}،")\n' : ''}- إقرار مختصر باحتياجهم (معاد صياغته بشكل احترافي)
- كيف ستتعامل مع المشروع (محدد لمشروعهم)
- الخبرة ذات الصلة (ذكر طبيعي، وليس تباهي)
- خطوة تالية واضحة أو سؤال

الطول المستهدف: ${wordCounts[proposalLength]}
مستوى الخبرة: ${experienceContext[experienceLevel]}`
      };

      const systemPrompt = platformPrompts[platform];

      const userPrompt = platform === 'mostaql'
        ? `اكتب عرضاً لمنصة مستقل لهذا المشروع:

${jobDescription}

تذكر: اكتب بشكل طبيعي وإنساني، كن محدداً، تجنب العبارات العامة، والتزم بـ ${wordCounts[proposalLength]}.`
        : `Write an Upwork proposal for this job posting:

${jobDescription}

Remember: Sound human, be specific, avoid generic phrases, and stay within ${wordCounts[proposalLength]}.`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `${systemPrompt}\n\n${userPrompt}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate proposal');
      }

      const data = await response.json();
      const proposalText = (data.content as { type: string; text: string }[])
        .filter((block) => block.type === 'text')
        .map((block) => block.text)
        .join('\n')
        .trim();

      // Clean the output
      const cleanedProposal = proposalText
        .replace(/```/g, '')
        .replace(/\*\*/g, '')
        .replace(/#{1,6}\s/g, '')
        .trim();

      setGeneratedProposal(cleanedProposal);
    } catch (err) {
      setError(platform === 'mostaql' ? 'فشل في إنشاء العرض. يرجى المحاولة مرة أخرى.' : 'Failed to generate proposal. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedProposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {platform === 'mostaql' ? 'مساعد كتابة العروض للمستقلين' : 'Freelance Proposal Assistant'}
          </h1>
          <p className="text-gray-600">
            {platform === 'mostaql' 
              ? 'أنشئ عروضاً احترافية لمنصة مستقل تبدو طبيعية وتكسب العملاء'
              : 'Generate professional Upwork proposals that sound human and win clients'}
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="space-y-6">
            {/* Platform Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {platform === 'mostaql' ? 'المنصة' : 'Platform'}
              </label>
              <select
                value={platform}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPlatform(e.target.value as 'upwork' | 'mostaql')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              >
                <option value="upwork">Upwork (English)</option>
                <option value="mostaql">مستقل (العربية)</option>
              </select>
            </div>

            {/* Client Name Input (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {platform === 'mostaql' ? 'اسم العميل (اختياري)' : 'Client Name (Optional)'}
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)}
                placeholder={platform === 'mostaql' ? 'أحمد، سارة، محمد...' : 'John, Sarah, Mike...'}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 ${platform === 'mostaql' ? 'text-right' : 'text-left'}`}
                dir={platform === 'mostaql' ? 'rtl' : 'ltr'}
              />
              <p className="mt-1 text-xs text-gray-500">
                {platform === 'mostaql' 
                  ? 'أضف اسم العميل للحصول على تحية شخصية في بداية العرض'
                  : 'Add the client\'s name for a personalized greeting at the start'}
              </p>
            </div>

            {/* Job Description Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {platform === 'mostaql' ? 'وصف المشروع' : 'Job Description'}
              </label>
              <textarea
                value={jobDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setJobDescription(e.target.value)}
                placeholder={platform === 'mostaql' ? 'الصق وصف المشروع هنا...' : 'Paste the job posting here...'}
                className={`w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-400 ${platform === 'mostaql' ? 'text-right' : 'text-left'}`}
                dir={platform === 'mostaql' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Client Name Input (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {platform === 'mostaql' ? 'اسم العميل (اختياري)' : 'Client Name (Optional)'}
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClientName(e.target.value)}
                placeholder={platform === 'mostaql' ? 'أحمد، سارة، محمد...' : 'John, Sarah, Mike...'}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-400 ${platform === 'mostaql' ? 'text-right' : 'text-left'}`}
                dir={platform === 'mostaql' ? 'rtl' : 'ltr'}
              />
              <p className="mt-1 text-xs text-gray-500">
                {platform === 'mostaql' 
                  ? 'أضف اسم العميل للحصول على تحية شخصية في بداية العرض'
                  : 'Add the client\'s name for a personalized greeting at the start'}
              </p>
            </div>

            {/* Controls Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Proposal Length */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {platform === 'mostaql' ? 'طول العرض' : 'Proposal Length'}
                </label>
                <select
                  value={proposalLength}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setProposalLength(e.target.value as 'short' | 'medium')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {platform === 'mostaql' ? (
                    <>
                      <option value="short">قصير (50–70 كلمة)</option>
                      <option value="medium">متوسط (100–150 كلمة)</option>
                    </>
                  ) : (
                    <>
                      <option value="short">Short (60–80 words)</option>
                      <option value="medium">Medium (120–180 words)</option>
                    </>
                  )}
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {platform === 'mostaql' ? 'مستوى الخبرة' : 'Experience Level'}
                </label>
                <select
                  value={experienceLevel}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setExperienceLevel(e.target.value as 'beginner' | 'intermediate' | 'expert')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  {platform === 'mostaql' ? (
                    <>
                      <option value="beginner">مبتدئ</option>
                      <option value="intermediate">متوسط</option>
                      <option value="expert">خبير</option>
                    </>
                  ) : (
                    <>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateProposal}
              disabled={isLoading || !jobDescription.trim()}
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {platform === 'mostaql' ? 'جاري الإنشاء...' : 'Generating...'}
                </>
              ) : (
                platform === 'mostaql' ? 'إنشاء العرض' : 'Generate Proposal'
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Generated Proposal Output */}
        {generatedProposal && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {platform === 'mostaql' ? 'عرضك' : 'Your Proposal'}
              </h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    {platform === 'mostaql' ? 'تم النسخ!' : 'Copied!'}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {platform === 'mostaql' ? 'نسخ' : 'Copy'}
                  </>
                )}
              </button>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className={`text-gray-800 whitespace-pre-wrap leading-relaxed ${platform === 'mostaql' ? 'text-right' : 'text-left'}`} dir={platform === 'mostaql' ? 'rtl' : 'ltr'}>
                {generatedProposal}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>{platform === 'mostaql' ? 'محسّن لعروض منصة مستقل' : 'Optimized for Upwork proposals'}</p>
        </div>
      </div>
    </div>
  );
}