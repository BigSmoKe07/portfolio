"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/data/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 mt-[100px] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <h1 className="text-4xl mb-4">Projects</h1>
      <p className="text-zinc-500 mb-12 max-w-2xl">
        Research and engineering work across ML infrastructure, LLM systems, reinforcement learning, and NLP.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li key={project.id}>
            <Card className="h-full border-zinc-800 bg-black/40 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-colors">
              <div className="relative w-full aspect-[3/2] bg-zinc-900">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400 w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-xl text-zinc-100">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.github && project.github !== "#" && (
                  <Button asChild variant="outline" size="sm" className="border-zinc-700">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {project.live && project.live !== "#" && (
                  <Button asChild variant="outline" size="sm" className="border-zinc-700">
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live demo
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
