import { createClient } from "../../supabase/server";
import { redirect } from "next/navigation";
import {
  Upload,
  FileText,
  Image,
  Archive,
  CheckCircle,
  AlertCircle,
  Star,
  Tag,
  Users,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MainLayout from "@/components/layout/main-layout";

export default async function UploadPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <MainLayout
      user={user}
      showSearch={false}
      title="Upload Resource"
      subtitle="Share your creation with the community"
    >
      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-6 h-6 text-purple-400" />
                  Resource Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Resource Name */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-white"
                  >
                    Resource Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter resource name..."
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label
                    htmlFor="category"
                    className="text-sm font-medium text-white"
                  >
                    Category *
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/30 border-slate-600/50 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="plugin">Plugin</SelectItem>
                      <SelectItem value="mod">Mod</SelectItem>
                      <SelectItem value="texture-pack">Texture Pack</SelectItem>
                      <SelectItem value="shader">Shader</SelectItem>
                      <SelectItem value="map">Map</SelectItem>
                      <SelectItem value="config">Config</SelectItem>
                      <SelectItem value="client">Client</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-white"
                  >
                    Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your resource, its features, and how to use it..."
                    rows={6}
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label
                    htmlFor="tags"
                    className="text-sm font-medium text-white"
                  >
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    placeholder="Enter tags separated by commas (e.g., pvp, survival, economy)"
                    className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>

                {/* Version */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="version"
                      className="text-sm font-medium text-white"
                    >
                      Version
                    </Label>
                    <Input
                      id="version"
                      placeholder="1.0.0"
                      className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="minecraft-version"
                      className="text-sm font-medium text-white"
                    >
                      Minecraft Version
                    </Label>
                    <Input
                      id="minecraft-version"
                      placeholder="1.20.1"
                      className="bg-slate-700/30 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-white">
                    Upload Files *
                  </Label>
                  <div className="border-2 border-dashed border-slate-600/50 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-white font-medium mb-2">
                      Drag and drop your files here
                    </p>
                    <p className="text-slate-400 text-sm mb-4">
                      or click to browse
                    </p>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-xl">
                      Choose Files
                    </Button>
                    <p className="text-xs text-slate-500 mt-4">
                      Supported formats: .jar, .zip, .rar, .mcpack, .mcworld
                      (Max 100MB)
                    </p>
                  </div>
                </div>

                {/* Screenshots */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium text-white">
                    Screenshots (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-slate-600/50 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors">
                    <Image className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                    <p className="text-white font-medium mb-1">
                      Add screenshots
                    </p>
                    <p className="text-slate-400 text-sm mb-3">
                      Show off your resource with images
                    </p>
                    <Button
                      variant="outline"
                      className="bg-white/10 border-slate-600/50 text-white hover:bg-white/20 px-4 py-2 rounded-xl"
                    >
                      Upload Images
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 text-lg rounded-xl">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Resource
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upload Guidelines */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Upload Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      Original Content Only
                    </p>
                    <p className="text-slate-400 text-xs">
                      Upload only your own creations or content you have
                      permission to share
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      Clear Description
                    </p>
                    <p className="text-slate-400 text-xs">
                      Provide detailed information about features and
                      installation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      Quality Screenshots
                    </p>
                    <p className="text-slate-400 text-xs">
                      Include high-quality images showcasing your resource
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">
                      Proper Categorization
                    </p>
                    <p className="text-slate-400 text-xs">
                      Choose the correct category and add relevant tags
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Requirements */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <Archive className="w-5 h-5 text-blue-400" />
                  File Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Max file size:</span>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                    100MB
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">
                    Supported formats:
                  </span>
                  <div className="flex gap-1">
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .jar
                    </Badge>
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .zip
                    </Badge>
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .rar
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Image formats:</span>
                  <div className="flex gap-1">
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .png
                    </Badge>
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .jpg
                    </Badge>
                    <Badge className="bg-slate-600/50 text-slate-300 text-xs">
                      .gif
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="bg-slate-800/30 backdrop-blur-xl border-slate-700/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    50,000+
                  </div>
                  <div className="text-slate-400 text-sm">
                    Resources Uploaded
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    2M+
                  </div>
                  <div className="text-slate-400 text-sm">Total Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    4.8★
                  </div>
                  <div className="text-slate-400 text-sm">Average Rating</div>
                </div>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card className="bg-orange-500/10 backdrop-blur-xl border border-orange-500/30">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-orange-400 font-medium text-sm mb-1">
                      Content Review
                    </p>
                    <p className="text-orange-300 text-xs">
                      All uploads are reviewed by our moderation team before
                      being published. This process usually takes 24-48 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
