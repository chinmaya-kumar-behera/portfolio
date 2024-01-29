import React from 'react'
import { FaGithub } from 'react-icons/fa';
import ProjectLogo from './ProjectLogo';
import { PhotoGallery } from '@/components/shared';
import demo from "../../../_asssets/images/demo.jpg"
import demo1 from "../../../_asssets/images/demo1.jpeg"
import demo2 from "../../../_asssets/images/demo2.jpg";
import demo3 from "../../../_asssets/images/demo3.jpg";

const ProjectContent = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between items-center">
        <div className="">
          <ProjectLogo />
        </div>
        <div className="">
          <button className="flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-400 transition-all text-white rounded-md">
            <FaGithub className="text-xl" />
            <span>Get Source Code</span>
          </button>
        </div>
      </div>
      <div className="py-3">
        <p>
          Paragraphs & Topic Sentences A paragraph is a series of sentences that
          are organized and coherent, and are all related to a single topic.
          Almost every piece of writing you do that is longer than a few
          sentences should be organized into paragraphs.
        </p>
      </div>
      <div className="">
        <PhotoGallery photos={[demo, demo1, demo2, demo3, demo3]} />
      </div>
      <p>
        This is because paragraphs show a reader where the subdivisions of an
        essay begin and end, and thus help the reader see the organization of
        the essay and grasp its main points. Paragraphs can contain many
        different kinds of information. A paragraph could contain a series of
        brief examples or a single long illustration of a general point. It
        might describe a place, character, or process; narrate a series of
        events; compare or contrast two or more things; classify items into
        categories; or describe causes and effects. Regardless of the kind of
        information they contain, all paragraphs share certain characteristics.
        One of the most important of these is a topic sentence. TOPIC SENTENCES
        A well-organized paragraph supports or develops a single controlling
        idea, which is expressed in a sentence called the topic sentence. A
        topic sentence has several important functions: it substantiates or
        supports an essay’s thesis statement; it unifies the content of a
        paragraph and directs the order of the sentences; and it advises the
        reader of the subject to be discussed and how the paragraph will discuss
        it. Readers generally look to the first few sentences in a paragraph to
        determine the subject and perspective of the paragraph. That’s why it’s
        often best to put the topic sentence at the very beginning of the
        paragraph. In some cases, however, it’s more effective to place another
        sentence before the topic sentence—for example, a sentence linking the
        current paragraph to the previous one, or one providing background
        information. Although most paragraphs should have a topic sentence,
        there are a few situations when a paragraph might not need a topic
        sentence. For example, you might be able to omit a topic sentence in a
        paragraph that narrates a series of events, if a paragraph continues
        developing an idea that you introduced (with a topic sentence) in the
        previous paragraph, or if all the sentences and details in a paragraph
        clearly refer—perhaps indirectly—to a main point. The vast majority of
        your paragraphs, however, should have a topic sentence. PARAGRAPH
        STRUCTURE Most paragraphs in an essay have a three-part
        structure—introduction, body, and conclusion. You can see this structure
        in paragraphs whether they are narrating, describing, comparing,
        contrasting, or analyzing information. Each part of the paragraph plays
        an important role in communicating your meaning to your reader.
        Introduction: the first section of a paragraph; should include the topic
        sentence and any other sentences at the beginning of the paragraph that
        give background information or provide a transition. Body: follows the
        introduction; discusses the controlling idea, using facts, arguments,
        analysis, examples, and other information. Conclusion: the final
        section; summarizes the connections between the information discussed in
        the body of the paragraph and the paragraph’s controlling idea. The
        following paragraph illustrates this pattern and other information.
        Conclusion: the final section; summarizes the connections between the
        information discussed in the body of the paragraph and the paragraph’s
        controlling idea. The following paragraph illustrates this pattern and
        other information. Conclusion: the final section; summarizes the
        connections between the information discussed in the body of the
        paragraph and the paragraph’s controlling idea. The following paragraph
        illustrates this pattern section; summarizes the connections between the
        information discussed in the body of the paragraph and the paragraph’s
        controlling idea. The following paragraph illustrates this pattern and
        other information. Conclusion: the final section; summarizes the
        connections between the information discussed in the body of the
        paragraph and the paragraph’s controlling idea. The following paragraph
        illustrates this pattern section; summarizes the connections between the
        information discussed in the body of the paragraph and the paragraph’s
        controlling idea. The following paragraph illustrates this pattern and
        other information. Conclusion: the final section; summarizes the
        connections between the information discussed in the body of the
        paragraph and the paragraph’s controlling idea. The following paragraph
        illustrates this pattern
      </p>
    </div>
  );
}

export default ProjectContent