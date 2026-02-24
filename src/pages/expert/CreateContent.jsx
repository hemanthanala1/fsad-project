import { Upload, FileText, Image, Video, Send } from 'lucide-react';

export default function CreateContent() {
    return (
        <div className="container py-16 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <h1 className="h1 mb-2">Create Content</h1>
                <p className="p-large mb-8 text-muted">Publish articles, guides, or videos to the Learning Hub.</p>

                <div className="card flex flex-col gap-6 animate-slide-up">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Title</label>
                        <input type="text" className="input" placeholder="Give your content an engaging title..." />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium">Category</label>
                            <select className="input cursor-pointer">
                                <option>Crop Management</option>
                                <option>Soil Health</option>
                                <option>Water Conservation</option>
                                <option>AgTech</option>
                                <option>Market & Business</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium">Content Type</label>
                            <select className="input cursor-pointer">
                                <option>Article</option>
                                <option>Video Course</option>
                                <option>Quick Guide</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Cover Media</label>
                        <div className="border-2 border-dashed border-[var(--border)] rounded-lg p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:bg-[var(--bg-main)] transition-colors">
                            <div className="flex gap-4 text-[var(--text-muted)]">
                                <Image size={32} />
                                <Video size={32} />
                            </div>
                            <div>
                                <span className="font-semibold" style={{ color: 'var(--primary)' }}>Click to upload</span> or drag and drop
                                <p className="text-sm text-muted mt-1">SVG, PNG, JPG or MP4 (max. 800x400px)</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Content Body</label>
                        <div className="border border-[var(--border)] rounded-md overflow-hidden">
                            <div className="flex gap-2 p-2 border-b border-[var(--border)] bg-[var(--bg-main)]">
                                <button className="p-2 hover:bg-[var(--bg-card)] rounded"><FileText size={18} /></button>
                                <button className="p-2 hover:bg-[var(--bg-card)] rounded"><span className="font-bold">B</span></button>
                                <button className="p-2 hover:bg-[var(--bg-card)] rounded"><span className="italic">I</span></button>
                            </div>
                            <textarea
                                className="w-full p-4 outline-none resize-y min-h-[300px]"
                                style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
                                placeholder="Start writing your educational content here..."
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-4 pt-6 border-t border-[var(--border)]">
                        <button className="btn btn-outline border-transparent">Save Draft</button>
                        <button className="btn btn-primary">
                            Publish Content <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
