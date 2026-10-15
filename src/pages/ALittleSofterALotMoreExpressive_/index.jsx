import React, {useState} from "react";
export default function ALittleSofterALotMoreExpressive() {
	const [input1, onChangeInput1] = useState('');
	return (
		<div className="flex flex-col bg-white">
			<div className="self-stretch bg-slate-50 overflow-hidden">
				<div className="flex items-center self-stretch">
					<div className="flex flex-col items-start bg-white w-60 pt-7 px-5">
						<div className="flex items-center mb-[30px] gap-2.5">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/76wlpbju_expires_30_days.png"} 
								className="w-[38px] h-[38px] rounded-[9999px] object-fill"
							/>
							<div className="flex flex-col shrink-0 items-start">
								<span className="text-slate-900 text-[23px] font-bold" >
									aether
								</span>
								<span className="text-slate-500 text-[10px] mr-[13px]" >
									EXPRESSIVE
								</span>
							</div>
						</div>
						<button className="flex flex-col items-start bg-[#F5F0FF] text-left py-1.5 px-3 mb-[30px] rounded-[9999px] border-0">
							<span className="text-violet-800 text-xs font-bold" >
								Design system / v1.0
							</span>
						</button>
						<div className="flex flex-col self-stretch mb-[30px] gap-1">
							<div className="flex items-center self-stretch bg-[#EDE5FF] rounded-[9999px]">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/jf0zrcxz_expires_30_days.png"} 
									className="w-[18px] h-[18px] ml-3 mr-2.5 rounded-[9999px] object-fill"
								/>
								<input
									placeholder="Foundations"
									value={input1}
									onChange={(event)=>onChangeInput1(event.target.value)}
									className="flex-1 self-stretch text-violet-800 bg-transparent text-xs font-bold py-3.5 mr-1 border-0"
								/>
							</div>
							<span className="text-slate-600 whitespace-pre-line" >
								COMPONENTS
Buttons
Segmented switcher
Chips &amp; badges
Inputs
Selection controls
Cards
Navigation
Lists &amp; avatars
Feedback
Overlays
EXPLORE
Playground
							</span>
						</div>
						<span className="text-slate-600 text-xs w-32 mb-[2988px] whitespace-pre-line" >
							Soft edges.
Strong foundations.

Static specimens / v1.0
						</span>
					</div>
					<div className="flex-1">
						<div className="flex justify-between items-center self-stretch bg-white py-[23px] px-12">
							<span className="text-slate-600 text-xs" >
								Library  /  Foundations
							</span>
							<div className="flex shrink-0 items-center bg-slate-50 py-[5px] px-1 gap-1.5 rounded-[9999px]">
								<button className="flex flex-col shrink-0 items-start bg-[#EDE5FF] text-left py-[7px] px-3 rounded-[9999px] border-0">
									<span className="text-violet-500 text-xs font-bold" >
										● Berry
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-slate-50 text-left py-[7px] px-3 rounded-[9999px] border-0">
									<span className="text-emerald-500 text-xs" >
										● Tropical
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-slate-50 text-left py-[7px] px-3 rounded-[9999px] border-0">
									<span className="text-[#F97316] text-xs" >
										● Sunset
									</span>
								</button>
								<button className="flex flex-col shrink-0 items-start bg-slate-50 text-left py-[7px] px-3 rounded-[9999px] border-0">
									<span className="text-sky-600 text-xs" >
										● Neon
									</span>
								</button>
							</div>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/7vrbrj14_expires_30_days.png"} 
								className="w-[78px] h-[42px] rounded-[9999px] object-fill"
							/>
						</div>
						<div className="flex flex-col items-start self-stretch py-[47px] pr-12">
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[18px]">
								<span className="text-violet-800 text-xs" >
									THE SYSTEM  /  00  /  AETHER EXPRESSIVE
								</span>
								<span className="text-slate-900 text-5xl font-bold font-display" >
									A little softer. A lot more expressive.
								</span>
								<span className="text-slate-600 text-base" >
									Material-inspired tonal surfaces. Apple-inspired spring character. One friendly language for every component, theme and state.
								</span>
							</div>
							<div className="flex items-start self-stretch bg-[#EDE5FF] p-8 mb-[41px] ml-12 gap-8 rounded-[32px]">
								<div className="flex flex-1 flex-col items-start gap-4">
									<button className="flex flex-col items-start bg-white text-left py-1.5 px-3 rounded-[9999px] border-0">
										<span className="text-violet-800 text-xs font-bold" >
											THE EXPRESSIVE TONAL ATELIER
										</span>
									</button>
									<span className="text-slate-900 text-3xl font-bold font-display" >
										Playful by nature. Rigorous by design.
									</span>
									<span className="text-violet-800 text-base w-[649px]" >
										Pill-first controls, generous breathing room and just enough bounce. Personality lives in the details; clarity stays at the center.
									</span>
									<div className="flex items-center self-stretch gap-2">
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-[9999px] border-0">
											<span className="text-violet-800 text-xs font-bold" >
												4 themes
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-[9999px] border-0">
											<span className="text-violet-800 text-xs font-bold" >
												10 families
											</span>
										</button>
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-1.5 px-3 rounded-[9999px] border-0">
											<span className="text-violet-800 text-xs font-bold" >
												AA intent
											</span>
										</button>
									</div>
								</div>
								<div className="flex flex-col items-center w-[340px] py-5 gap-4">
									<button className="flex justify-center items-center self-stretch bg-violet-600 text-left py-[19px] mx-[18px] gap-2.5 rounded-[9999px] border-0" 
										style={{
											boxShadow: "0px 8px 24px #6D28D912"
										}}
										>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/k4dnh9gm_expires_30_days.png"} 
											className="w-[21px] h-[21px] rounded-[9999px] object-fill"
										/>
										<span className="text-white text-[26px] w-52" >
											Make room for joy
										</span>
									</button>
									<div className="flex items-center self-stretch mx-5 gap-2.5">
										<button className="flex flex-col shrink-0 items-start bg-white text-left py-[5px] px-3 rounded-[9999px] border-0">
											<span className="text-violet-800 text-xs font-bold" >
												Rounded, not random
											</span>
										</button>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/9d1aot5m_expires_30_days.png"} 
											className="w-[66px] h-10 rounded-[9999px] object-fill"
										/>
									</div>
									<button className="flex items-center bg-[#EDE5FF] text-left py-3 px-6 gap-2.5 rounded-[9999px] border-0">
										<span className="text-violet-800 text-sm font-bold" >
											Explore the library
										</span>
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/ddeekf3e_expires_30_days.png"} 
											className="w-[18px] h-[18px] rounded-[9999px] object-fill"
										/>
									</button>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-[39px] ml-12 gap-5">
								<span className="text-slate-900 whitespace-pre-line" >
									01 / Four moods. One system.
Exact preset values. The active theme changes brand and accent roles—not component anatomy.
								</span>
								<div className="flex flex-col self-stretch bg-white p-7 gap-6 rounded-[32px]">
									<div className="flex items-center self-stretch gap-4">
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] py-[22px] pr-[22px] rounded-2xl">
											<div className="flex justify-between items-center self-stretch mb-[17px] ml-[22px]">
												<span className="text-slate-900 text-2xl font-bold" >
													Berry
												</span>
												<button className="flex flex-col shrink-0 items-start bg-[#EDE5FF] text-left py-[5px] px-3 rounded-[9999px] border-0">
													<span className="text-violet-800 text-xs font-bold" >
														Default
													</span>
												</button>
											</div>
											<span className="text-slate-600 text-[13px] mb-[18px] ml-[22px]" >
												Curious, soft, expressive
											</span>
											<div className="flex items-center self-stretch mb-[18px] ml-[22px] gap-2">
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-violet-500 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#8b5cf6
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-violet-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#7c3aed
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-purple-800 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.700
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#6d28d9
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-rose-500 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#f43f5e
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-rose-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#e11d48
													</span>
												</div>
											</div>
											<button className="flex items-center bg-[#EDE5FF] text-left py-[13px] px-3.5 ml-[22px] rounded-[9999px] border-0">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/v8b2uymz_expires_30_days.png"} 
													className="w-4 h-4 mr-3 rounded-[9999px] object-fill"
												/>
												<span className="text-violet-800 text-xs font-bold mr-[233px]" >
													Selected tonal container
												</span>
												<span className="text-violet-800 text-[10px] font-mono" >
													#EDE5FF
												</span>
											</button>
										</div>
										<div className="flex flex-1 flex-col items-start bg-emerald-50 py-[22px] pr-[22px] rounded-2xl">
											<div className="flex justify-between items-center self-stretch mb-[17px] ml-[22px]">
												<span className="text-slate-900 text-2xl font-bold" >
													Tropical
												</span>
												<button className="flex flex-col shrink-0 items-start bg-emerald-100 text-left py-[5px] px-3 rounded-[9999px] border-0">
													<span className="text-emerald-800 text-xs font-bold" >
														Preset
													</span>
												</button>
											</div>
											<span className="text-slate-600 text-[13px] mb-[18px] ml-[22px]" >
												Fresh, clear, optimistic
											</span>
											<div className="flex items-center self-stretch mb-[18px] ml-[22px] gap-2">
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-emerald-500 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#10b981
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-emerald-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#059669
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-emerald-700 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.700
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#047857
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-cyan-500 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#06b6d4
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-cyan-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#0891b2
													</span>
												</div>
											</div>
											<button className="flex items-center bg-emerald-100 text-left py-[13px] px-3.5 ml-[22px] rounded-[9999px] border-0">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/0rrmryjw_expires_30_days.png"} 
													className="w-4 h-4 mr-3 rounded-[9999px] object-fill"
												/>
												<span className="text-emerald-800 text-xs font-bold mr-[233px]" >
													Selected tonal container
												</span>
												<span className="text-emerald-800 text-[10px] font-mono" >
													#D1FAE5
												</span>
											</button>
										</div>
									</div>
									<div className="flex items-center self-stretch gap-4">
										<div className="flex flex-1 flex-col items-start bg-orange-50 py-[22px] pr-[22px] rounded-2xl">
											<div className="flex justify-between items-center self-stretch mb-[17px] ml-[22px]">
												<span className="text-slate-900 text-2xl font-bold" >
													Sunset
												</span>
												<button className="flex flex-col shrink-0 items-start bg-orange-100 text-left py-[5px] px-3 rounded-[9999px] border-0">
													<span className="text-orange-800 text-xs font-bold" >
														Preset
													</span>
												</button>
											</div>
											<span className="text-slate-600 text-[13px] mb-[18px] ml-[22px]" >
												Warm, bright, welcoming
											</span>
											<div className="flex items-center self-stretch mb-[17px] ml-[22px] gap-2">
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-[#F97316] h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#f97316
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-orange-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#ea580c
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-orange-700 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.700
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#c2410c
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-pink-500 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#ec4899
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-pink-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#db2777
													</span>
												</div>
											</div>
											<button className="flex items-center bg-orange-100 text-left p-3.5 ml-[22px] rounded-[9999px] border-0">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/x5f8raxs_expires_30_days.png"} 
													className="w-4 h-4 mr-3 rounded-[9999px] object-fill"
												/>
												<span className="text-orange-800 text-xs font-bold mr-[233px]" >
													Selected tonal container
												</span>
												<span className="text-orange-800 text-[10px] font-mono" >
													#FFEDD5
												</span>
											</button>
										</div>
										<div className="flex flex-1 flex-col items-start bg-sky-50 py-[22px] pr-[22px] rounded-2xl">
											<div className="flex justify-between items-center self-stretch mb-[17px] ml-[22px]">
												<span className="text-slate-900 text-2xl font-bold" >
													Neon
												</span>
												<button className="flex flex-col shrink-0 items-start bg-sky-100 text-left py-[5px] px-3 rounded-[9999px] border-0">
													<span className="text-sky-800 text-xs font-bold" >
														Preset
													</span>
												</button>
											</div>
											<span className="text-slate-600 text-[13px] mb-[18px] ml-[22px]" >
												Electric, precise, vivid
											</span>
											<div className="flex items-center self-stretch mb-[17px] ml-[22px] gap-2">
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-sky-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#0284c7
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-sky-700 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#0369a1
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-sky-800 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														brand.700
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#075985
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-[#A855F7] h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.500
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#a855f7
													</span>
												</div>
												<div className="flex flex-col items-start w-[88px]">
													<div className="self-stretch bg-purple-600 h-[52px] mb-[7px] rounded-[9999px]">
													</div>
													<span className="text-slate-600 text-[9px] mb-2 font-mono" >
														accent.600
													</span>
													<span className="text-slate-900 text-[10px] font-mono" >
														#9333ea
													</span>
												</div>
											</div>
											<button className="flex items-center bg-sky-100 text-left p-3.5 ml-[22px] rounded-[9999px] border-0">
												<img
													src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/2qarl09p_expires_30_days.png"} 
													className="w-4 h-4 mr-3 rounded-[9999px] object-fill"
												/>
												<span className="text-sky-800 text-xs font-bold mr-[233px]" >
													Selected tonal container
												</span>
												<span className="text-sky-800 text-[10px] font-mono" >
													#E0F2FE
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[19px]">
								<span className="text-slate-900 whitespace-pre-line" >
									02 / Tonal color &amp; surfaces
Choose soft containers for selection. Reserve strong brand tones for emphasis and focus.
								</span>
								<div className="flex flex-col self-stretch bg-white p-7 gap-6 rounded-[32px]">
									<div className="flex items-center self-stretch">
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] py-5 pr-5 mr-[17px] gap-[17px] rounded-2xl">
											<span className="text-violet-800 text-xs ml-5" >
												BERRY / LIGHT
											</span>
											<div className="flex flex-col self-stretch ml-5 gap-3">
												<div className="flex items-center self-stretch gap-3">
													<div className="bg-slate-50 w-11 h-8 rounded-[9999px] border border-solid border-slate-200">
													</div>
													<span className="text-slate-600 text-[11px] font-mono" >
														surface.canvas   #f8fafc
													</span>
												</div>
												<div className="flex items-center self-stretch gap-3">
													<div className="bg-white w-11 h-8 rounded-[9999px] border border-solid border-slate-200">
													</div>
													<span className="text-slate-600 text-[11px] font-mono" >
														surface.card   #ffffff
													</span>
												</div>
												<div className="flex items-center self-stretch gap-3">
													<div className="bg-[#F5F0FF] w-11 h-8 rounded-[9999px] border border-solid border-slate-200">
													</div>
													<span className="text-slate-600 text-[11px] font-mono" >
														brand.tint   #F5F0FF
													</span>
												</div>
												<div className="flex items-center self-stretch gap-3">
													<div className="bg-[#EDE5FF] w-11 h-8 rounded-[9999px] border border-solid border-slate-200">
													</div>
													<span className="text-slate-600 text-[11px] font-mono" >
														brand.container   #EDE5FF
													</span>
												</div>
											</div>
										</div>
										<div className="flex flex-1 flex-col items-start bg-slate-900 py-5 pr-5 mr-4 gap-[17px] rounded-2xl">
											<span className="text-violet-800 text-xs ml-[19px]" >
												BERRY / DARK
											</span>
											<div className="flex flex-col self-stretch ml-5 gap-3">
												<div className="flex items-center self-stretch gap-[11px]">
													<div className="bg-slate-900 w-11 h-8 rounded-[9999px]">
													</div>
													<span className="text-slate-300 text-[11px] font-mono" >
														slate.900   #0f172a
													</span>
												</div>
												<div className="flex items-center self-stretch gap-[11px]">
													<div className="bg-slate-800 w-11 h-8 rounded-[9999px]">
													</div>
													<span className="text-slate-300 text-[11px] font-mono" >
														slate.800   #1e293b
													</span>
												</div>
												<div className="flex items-center self-stretch gap-[11px]">
													<div className="bg-[#352754] w-11 h-8 rounded-[9999px]">
													</div>
													<span className="text-slate-300 text-[11px] font-mono" >
														brand.container   #352754
													</span>
												</div>
												<div className="flex items-center self-stretch gap-[11px]">
													<div className="bg-violet-300 w-11 h-8 rounded-[9999px]">
													</div>
													<span className="text-slate-300 text-[11px] font-mono" >
														brand.on-dark   #C4B5FD
													</span>
												</div>
											</div>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] pt-5 rounded-2xl">
											<span className="text-violet-800 text-xs mb-[18px] ml-5" >
												DERIVATION / GUIDANCE
											</span>
											<span className="text-slate-600 text-[13px] w-[269px] mb-[18px] ml-5" >
												Light tint ≈ 6% brand.500 on white; selected container ≈ 14%. Use rounded canonical hex values shown above.
											</span>
											<span className="text-slate-600 text-[13px] w-[282px] mb-[45px] ml-5" >
												Dark container ≈ 24% brand.500 on slate.900. Use light on-container text; never simply invert colors.
											</span>
										</div>
									</div>
									<div className="flex flex-col items-start self-stretch bg-slate-900 py-[23px] pl-6 rounded-2xl">
										<span className="text-violet-200 text-[13px] w-[713px] whitespace-pre-line" >
											theme → semantic role → component token
Example: Berry.brand.600 → action.primary → button.fill
Single-source token architecture is implementation guidance, not a live CSS-variable system.
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[19px]">
								<span className="text-slate-900" >
									03 / A friendly voice, a precise vocabulary
Outfit for personality. Plus Jakarta Sans for clarity. JetBrains Mono for values and specimen labels.
								</span>
								<div className="flex flex-col self-stretch bg-white p-7 gap-6 rounded-[32px]">
									<div className="flex items-center self-stretch py-3 gap-8">
										<div className="flex flex-col shrink-0 items-start pr-[180px] gap-1">
											<span className="text-slate-900 text-sm font-bold" >
												Display
											</span>
											<span className="text-slate-600 text-[11px]" >
												Outfit / 48 / 600
											</span>
										</div>
										<span className="text-slate-900 text-5xl font-bold font-display" >
											Expressive by default
										</span>
									</div>
									<div className="flex items-center self-stretch py-3 gap-8">
										<div className="flex flex-col shrink-0 items-start pr-[180px] gap-1">
											<span className="text-slate-900 text-sm font-bold" >
												H1
											</span>
											<span className="text-slate-600 text-[11px]" >
												Outfit / 30 / 600
											</span>
										</div>
										<span className="text-slate-900 text-3xl font-bold font-display" >
											Soft edges. Clear intent.
										</span>
									</div>
									<div className="flex items-center self-stretch py-3 gap-8">
										<div className="flex flex-col shrink-0 items-start pr-[108px] gap-1">
											<span className="text-slate-900 text-sm font-bold" >
												Body
											</span>
											<span className="text-slate-600 text-[11px]" >
												Plus Jakarta Sans / 16 / 400
											</span>
										</div>
										<span className="text-slate-900 text-base" >
											Good design should feel as natural as it looks.
										</span>
									</div>
									<div className="flex items-center self-stretch py-3 gap-8">
										<div className="flex flex-col shrink-0 items-start pr-[108px] gap-1">
											<span className="text-slate-900 text-sm font-bold" >
												Label
											</span>
											<span className="text-slate-600 text-[11px]" >
												Plus Jakarta Sans / 14 / 600
											</span>
										</div>
										<span className="text-slate-900 text-sm font-bold" >
											Create workspace
										</span>
									</div>
									<div className="flex items-center self-stretch py-3 gap-8">
										<div className="flex flex-col shrink-0 items-start pr-[127px] gap-1">
											<span className="text-slate-900 text-sm font-bold" >
												Code
											</span>
											<span className="text-slate-600 text-[11px]" >
												JetBrains Mono / 12 / 400
											</span>
										</div>
										<span className="text-slate-900 text-xs font-mono" >
											radius.control = 9999px
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[19px]">
								<span className="text-slate-900 whitespace-pre-line" >
									04 / Shape &amp; soft elevation
Rounded at every level. A smaller radius signals nesting, not a different design language.
								</span>
								<div className="flex flex-col items-start self-stretch bg-white py-[27px] pr-7 gap-6 rounded-[32px]">
									<div className="flex items-center self-stretch ml-7">
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] pt-5 mr-[17px] rounded-2xl">
											<span className="text-violet-800 text-xs mb-[17px] ml-5" >
												CONTROL / 9999px
											</span>
											<button className="flex flex-col items-start bg-violet-600 text-left py-3 px-6 mb-[18px] ml-5 rounded-[9999px] border-0">
												<span className="text-white text-sm font-bold" >
													Always a pill
												</span>
											</button>
											<span className="text-slate-600 text-[13px] mb-[33px] ml-5" >
												Buttons, chips, fields and navigation.
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] py-5 pr-5 mr-4 gap-[17px] rounded-2xl">
											<span className="text-violet-800 text-xs ml-[19px]" >
												CARD &amp; SHEET / 32px
											</span>
											<div className="flex flex-col items-start self-stretch bg-[#EDE5FF] pt-[18px] pl-[17px] ml-5 rounded-[32px]" 
												style={{
													boxShadow: "0px 8px 24px #6D28D912"
												}}>
												<span className="text-violet-800 text-base font-bold mb-[52px]" >
													Space to breathe
												</span>
											</div>
										</div>
										<div className="flex flex-1 flex-col items-start bg-[#F5F0FF] py-5 pr-5 gap-[17px] rounded-2xl">
											<span className="text-violet-800 text-xs ml-5" >
												NESTED / 16px
											</span>
											<div className="flex flex-col items-start self-stretch bg-white pt-[18px] pl-[18px] ml-5 rounded-2xl">
												<span className="text-slate-600 text-[13px] mb-[57px]" >
													Inset panels and multiline fields.
												</span>
											</div>
										</div>
									</div>
									<span className="text-slate-600 text-xs ml-7 font-mono" >
										elevation.soft = 0 8px 24px #6D28D914 · brand-tinted, never hard-edged
									</span>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[19px]">
								<span className="text-slate-900 whitespace-pre-line" >
									05 / A spring in its step
A static motion specification—not an animated preview.
								</span>
								<div className="flex flex-col self-stretch bg-white p-7 gap-6 rounded-[32px]">
									<div className="flex items-center self-stretch gap-4">
										<div className="flex flex-col items-start bg-[#F5F0FF] w-[330px] py-[23px] px-6 gap-4 rounded-2xl">
											<button className="flex flex-col items-start bg-[#EDE5FF] text-left py-[5px] px-3 rounded-[9999px] border-0">
												<span className="text-violet-800 text-xs font-bold" >
													400ms / spring easing
												</span>
											</button>
											<img
												src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/diujk303_expires_30_days.png"} 
												className="w-[282px] h-[120px] rounded-2xl object-fill"
											/>
											<span className="text-slate-600 text-[11px] font-mono" >
												cubic-bezier(0.34,1.56,0.64,1)
											</span>
										</div>
										<div className="flex flex-1 flex-col items-start gap-5">
											<div className="flex items-center self-stretch gap-4">
												<div className="flex flex-col items-start bg-[#F5F0FF] w-[343px] py-[19px] pl-5 pr-[174px] rounded-2xl">
													<span className="text-violet-800 text-xs mb-[17px]" >
														HOVER
													</span>
													<button className="flex flex-col items-start bg-[#7132E2] text-left py-3 px-6 mb-[18px] rounded-[9999px] border-0" 
														style={{
															boxShadow: "0px 8px 24px #6D28D912"
														}}
														>
														<span className="text-white text-sm font-bold" >
															Lift &amp; delight
														</span>
													</button>
													<span className="text-slate-600 text-xs font-mono" >
														scale 1.04 / lift 2px
													</span>
												</div>
												<div className="flex flex-col items-start bg-[#F5F0FF] w-[343px] py-[19px] pl-5 pr-40 rounded-2xl">
													<span className="text-violet-800 text-xs mb-[17px]" >
														PRESS
													</span>
													<button className="flex flex-col items-start bg-purple-800 text-left py-3 px-6 mb-[18px] rounded-[9999px] border-0">
														<span className="text-white text-sm font-bold" >
															Gentle feedback
														</span>
													</button>
													<span className="text-slate-600 text-xs font-mono" >
														scale 0.96
													</span>
												</div>
											</div>
											<span className="text-slate-600 text-sm w-[672px]" >
												Enter sheets with a spring slide-up. Keep content and focus stable. Never use motion as the only way to communicate a change.
											</span>
										</div>
									</div>
									<div className="flex items-start self-stretch bg-[#EDE5FF] p-5 gap-4 rounded-2xl">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/8u6jqx17_expires_30_days.png"} 
											className="w-5 h-5 rounded-2xl object-fill"
										/>
										<div className="flex flex-1 flex-col items-start gap-1">
											<span className="text-violet-800 text-base font-bold" >
												Honor reduced motion
											</span>
											<span className="text-slate-600 text-sm" >
												Remove scale, lift and spring overshoot. Use an instant state change or a short opacity fade (≤100ms). Preserve every label, status and focus indicator.
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-start self-stretch mb-10 ml-12 gap-[19px]">
								<span className="text-slate-900 text-2xl font-bold" >
									06 / Accessible, from the start
								</span>
								<div className="flex items-center self-stretch bg-white p-7 rounded-[32px]">
									<div className="flex flex-1 flex-col items-start mr-[17px] gap-4">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/x309z761_expires_30_days.png"} 
											className="w-5 h-5 object-fill"
										/>
										<span className="text-slate-900 text-xl font-bold" >
											WCAG AA
										</span>
										<span className="text-slate-600 text-sm" >
											Body text ≥4.5:1; large text ≥3:1; essential controls ≥3:1. Berry primary #7c3aed on white is ≈5.7:1. Check each preset before shipping; use brand.700 when needed.
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start mr-4 gap-4">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/96iq0i8k_expires_30_days.png"} 
											className="w-5 h-5 object-fill"
										/>
										<span className="text-slate-900 text-xl font-bold" >
											Keyboard first
										</span>
										<span className="text-slate-600 text-sm w-[315px]" >
											Visible 2px brand focus ring with 4px separation. Semantic controls, logical tab order, descriptive names and a 44px minimum touch target.
										</span>
									</div>
									<div className="flex flex-1 flex-col items-start gap-4">
										<img
											src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/kqsROjqLWR/bbonjd35_expires_30_days.png"} 
											className="w-5 h-5 object-fill"
										/>
										<span className="text-slate-900 text-xl font-bold" >
											360px → desktop
										</span>
										<span className="text-slate-600 text-sm w-[324px]" >
											Collapse sidebar to a menu. Stack galleries, retain labels and full-width fields. Do not shrink specimens or rely on hover on touch devices.
										</span>
									</div>
								</div>
							</div>
							<span className="text-slate-500 text-[11px] ml-12" >
								AETHER EXPRESSIVE / 1.0   ·   STATIC DOCUMENTATION   ·   360px → DESKTOP
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
