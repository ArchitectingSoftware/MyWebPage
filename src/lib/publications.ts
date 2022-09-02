export const PublicationsList = [
    {
        id:1,
        title:"On the evaluation of the Bunch search-based software modularization algorithm",
        cite:"B. S. Mitchell, S. Mancoridis, In the Springer-Verlag Journal of Soft Computing, \
                Volume 12, No 1, 2008, pp. 77-93.",
        link:"/pubs/JSC07.pdf",
        slides: null,
        abstract:"The ﬁrst part of this paper describes an automatic reverse engineering process to infer \
                    subsystem abstractions that are useful for a variety of software maintenance activities. \
                    This process is based on clustering the graph representing the modules and module-level \
                    dependencies found in the source code into abstract structures not in the source code called \
                    subsystems. The clustering process uses evolutionary algorithms to search through the \
                    enormous set of possible graph partitions, and is guided by a ﬁtness function designed to \
                    measure the quality of individual graph partitions. The second part of this paper focuses on \
                    evaluating the results produced by our clustering technique. Our previous research has shown \
                    through both qualitative and quantitative studies that our clustering technique produces \
                    good results quickly and consistently. In this part of the paper we study the underlying \
                    structure of the search space of several open source systems. We also report on some interesting \
                    ﬁndings our analysis uncovered by comparing random graphs to graphs representing real \
                    software systems."
    },
    {
        id:2,
        title: "On the Automatic Modularization of Software Systems Using the Bunch Tool",
        cite:"B. S. Mitchell, S. Mancoridis In the IEEE Transactions on Software Engineering, Volume 32, \
                Number 3, 2006, pp. 193-208.",
        link:"/pubs/TSE-0035-0304.pdf",
        slides: null,
        abstract:"Since modern software systems are large and complex, appropriate abstractions of their \
                    structure are needed to make them more understandable and, thus, easier to maintain. \
                    Software clustering techniques are useful to support the creation of these abstractions \
                    by producing architectural-level views of a system’s structure directly from its source \
                    code. This paper examines the Bunch clustering system which, unlike other software \
                    clustering tools, uses search techniques to perform clustering. Bunch produces a subsystem \
                    decomposition by partitioning a graph of the entities (e.g., classes) and relations (e.g., \
                    function calls) in the source code. Bunch uses a fitness function to evaluate the quality of \
                    graph partitions and uses search algorithms to find a satisfactory solution. This paper \
                    presents a case study to demonstrate how Bunch can be used to create views of the structure \
                    of significant software systems. This paper also outlines research to evaluate the software \
                    clustering results produced by Bunch."
    },
    {
        id:3,
        title:"Clustering Software Systems to Identify Subsystem Structures",
        cite:"B. S. Mitchell, Technical Report, Department of Mathematics and Computer Science, Drexel \
                University, USA.",
        link:"/pubs/drexel06.pdf",
        slides: null,
        abstract:"As the size of software systems continues to grow, understanding the structure of these systems \
                    gets harder. This coupled with associated problems such as of lack of current documentation, and \
                    the limited or nonexistent availability of the original designers of the system, adds further \
                    difficulty to the job of software professionals trying to understand the structure of large and \
                    complex systems. The application of clustering techniques and tools to software systems helps \
                    software designers, developers, and maintenance programmers by recovering high-level views of \
                    system designs. \
                    \
                    In this paper we survey clustering approaches that have been developed by software engineering \
                    researchers. We also examine classical clustering techniques that have been applied in mathematics, \
                    science, and engineering, and investigate how these techniques have been adapted to work in the \
                    software domain. We conclude with a discussion of open research challenges related to software \
                    clustering."
    },
    {
        id:4,
        title:"Using Interconnection Style Rules to Infer Software Architecture Relations",
        cite:"B. S. Mitchell, S. Mancoridis and M. Traverso. In the Proceedings of the Genetic and Evolutionary \
             Computation Conference (GECCO'04), Seattle, Washington, June, 2004.",
        link: "/pubs/gecco04.pdf",
        slides: null,
        abstract: "Software design techniques emphasize the use of abstractions to help developers deal \
                    with the complexity of constructing large and complex systems. These abstractions can \
                    also be used to guide programmers through a variety of maintenance, reengineering and \
                    enhancement activities. Unfortunately, recovering design abstractions directly from a \
                    system's implementation is a di±cult task because the source code does not contain them. \
                    In this paper we describe an automatic process to infer architectural-level abstractions \
                    from the source code. The first step uses software clustering to aggregate the system's \
                    modules into abstract containers called subsystems. The second step takes the output of \
                    the clustering process, and infers architectural-level relations based on formal style \
                    rules that are speci¯ed visually. This two step process has been implemented using a \
                    set of integrated tools that employ search techniques to locate good solutions to both \
                    the clustering and the relationship inferencing problem quickly. The paper concludes \
                    with a case study to demonstrate the e®ectiveness of our process and tools.    "
    },
    {
        id:5,
        title:"Reformulating Software Engineering as a Search Problem",
        cite: "J. Clark, J. J. Dolado, M. Harman, R. Hierons, B. Jones, M. Lumkin, B. S. Mitchell, S. Mancoridis, \
               K. Rees, M. Roper, M. Shepperd, In the Journal of IEE Proceedings - Software , 150(3): 161-175, 2003.",
        link: "/pubs/ieesw.pdf",
        slides: null,
        abstract: "Metaheuristic  techniques such as genetic algorithms, simulated annealing and tabu search have \
                    found wide application in most areas of engineering.  These techniques have also been applied in \
                    business, financial and economic modeling.  Metaheuristics have been applied to three areas of \
                    software engineering: test data generation, module clustering and cost/effort prediction, yet \
                    there remain many software engineering problems which have yet to be tackled using metaheuristics.  \
                    It is surprising that metaheuristics have not been more widely applied to software engineering:  \
                    many problems in software engineering are characterized by precisely the features which make \
                    metaheuristic search applicable.\
                    In this paper it is argued that the features which make metaheuristics applicable for engineering\
                    and business applications outside software engineering, also suggested that there is a great \
                    potential for the exploitation of metaheuristics within software engineering. \
                    The paper briefly reviews the principle metaheuristic search techniques and surveys existing \
                    work on the application of metaheuristics to the three software engineering areas of test data \
                    generation, module clustering and cost/effort prediction.  It also shows how metaheuristic \
                    search techniques can be applied to three additional areas of software engineering: \
                    maintenance/evolution, system integration and requirements scheduling.  The software engineering \
                    problem areas considered thus span the range of the software development process, from initial \
                    planning, cost estimation and requirements analysis, through to integration, maintenance and \
                    evolution of legacy systems.  The aim is to justify the claim that many problems in software \
                    engineering can be re-formulated as search problems to which metaheuristic techniques can \
                    be applied. \
                    The goal of this paper is to stimulate greater interest in metaheuristic search as a tool of \
                    optimization of software engineering problems and to encourage the investigation and exploitation \
                    of these technologies in finding near optimal solutions to the complex constraint-based scenarios \
                    which rise so frequently in software engineering."
    },
    {
        id:6,
        title:"A Heuristic Search Approach to Solving the Software Clustering Problem",
        cite: "B. S. Mitchell. In the IEEE Proceedings of the 2003 International Conference on Software Maintenance \
                (ICSM'03), Amsterdam, Netherlands, September, 2003.",
        link: "/pubs/icsm03.pdf",
        slides: [
            {
                type: "PPT",
                description: "Powerpoint - PPT",
                link: "/pubs/icsm03Talk.ppt"
            },
        ],
        abstract: "This paper provides an overview of the author’s Ph.D. thesis. The primary contribution of this \
                    research involved developing techniques to extract architectural information about a system \
                    directly from its source code. To accomplish this objective a series of software clustering \
                    algorithms were developed. These algorithms use metaheuristic search techniques to partition \
                    a directed graph generated from the entities and relations in the source code into subsystems. \
                    Determining the optimal solution to this problem was shown to be NP-hard, thus signiﬁcant \
                    emphasis was placed on ﬁnding solutions that were regarded as 'good enough' quickly. Several \
                    evaluation techniques were developed to gauge solution quality, and all of the software \
                    clustering tools created to support this work were made available for download over the Internet.     "
    },
    {
        id:7,
        title:"Modeling the Search Landscape of Metaheuristic Software Clustering Algorithms",
        cite:"B. S. Mitchell, S. Mancoridis. In the 7th Annual Genetic and Evolutionary Computing Conference \
                (GECCO'03) , Chicago, USA, July 2003. (BEST PAPER AWARD)",
        link:"/pubs/gecco03.pdf",
        slides: null,
        abstract:"Software clustering techniques are useful for extracting architectural information about a \
                   system directly from its source code structure. This paper starts by examining the Bunch \
                   clustering system, which uses metaheuristic search techniques to perform clustering. Bunch \
                   produces a subsystem decomposition by partitioning a graph formed from the entities \
                   (e.g., modules) and relations (e.g., function calls) in the source code, and then uses a \
                   ﬁtness function to evaluate the quality of the graph partition. Finding the best graph \
                   partition has been shown to be a NP-hard problem, thus Bunch attempts to ﬁnd a sub-optimal \
                   result that is 'good enough' using search algorithms. Since the validation of software \
                   clustering results often is overlooked, we propose an evaluation technique based on the search \
                   landscape of the graph being clustered. By gaining insight into the search space, we can \
                   determine the quality of a typical clustering result. This paper deﬁnes how the search landscape \
                   is modeled and how it can be used for evaluation. A case study that examines a number of open \
                   source systems is presented."
    },
    {
        id:8,
        title:"Search Based Reverse Engineering",
        cite:"B. S. Mitchell, S. Mancoridis, M. Traverso. In the ACM Proceedings of the 2002 International \
                 Conference on Software Engineering and Knowledge Engineering (SEKE'02), Ischia, Italy, July, \
                 2002. pp. 431-438.",
        link:"/pubs/seke02.pdf",
        slides: null,
        abstract:"In this paper we describe a two step process for reverse engineering the software architecture \
                    of a system directly from its source code. The ﬁrst step involves clustering the modules from the \
                    source code into abstract structures called subsystems. The second step involves reverse \
                    engineering the subsystem-level relations using a formal (and visual) architectural constraint \
                    language. We use search techniques to accomplish both of these steps, and have implemented a \
                    suite of integrated tools to support the reverse engineering process. Through a case study, we \
                    demonstrate how our tools can be used to extract the software architecture of an open-source \
                    software package from its source code without having any a priori knowledge about its design."
    },
    {
        id:9,
        title:"Using Heuristic Search Techniques to Extract Design Abstractions from Source Code",
        cite:"B. S. Mitchell, S. Mancoridis. In the Proceedings of the Genetic and Evolutionary Computation \
              Conference (GECCO'02), New York, NY, July, 2002",
        link:"/pubs/gecco02.pdf",
        slides: [
            {
                type: "PPT",
                description: "Powerpoint - PPT",
                link: "/pubs/gecco02Talk.ppt"
            }
        ],
        abstract:"As modern software systems are large and complex, appropriate abstractions of their structure are \
                 needed to make them more understandable and, thus, easier to maintain. Software clustering tools are \
                 useful to support the creation of these abstractions. In this paper we describe our search algorithms \
                 for software clustering, and conduct a case study to demonstrate how altering the clustering \
                 parameters impacts the behavior and performance of our algorithms."
    },
    {
        id:10,
        title:"Comparing the Decompositions Produced by Software Clustering Algorithms using Similarity Measurements",
        cite: "B. S. Mitchell, S. Mancoridis. In the IEEE Proceedings of the 2001 International Conference on Software \
                    Maintenance (ICSM'01), Florence, Italy, November, 2001.",
        link: "/pubs/icsm01.pdf",
        slides: [
            {
                type: "PPT",
                description: "Powerpoint - PPT",
                link: "/pubs/icsm01Pres.ppt"
            },
            {
                type: "PDF",
                description: "Acrobat - PDF",
                link: "/pubs/icsm01Pres.pdf"
            }
        ],
        abstract: "Decomposing source code components and relations into subsystem clusters is an active area of \
                    research. Numerous clustering approaches have been proposed in the reverse engineering literature, \
                    each one using a different algorithm to identify subsystems. Since different clustering techniques \
                    may not produce identical results when applied to the same system, mechanisms that can measure the \
                    extent of these differences are needed. Some work to measure the similarity between decompositions \
                    has been done, but this work considers the assignment of source code components to clusters as the \
                    only criterion for similarity. We argue that better similarity measurements can be designed if \
                    the relations between the components are considered. \
                    In this paper we propose two similarity measurements that overcome certain problems in existing \
                    measurements. We also provide some suggestions on how to identify and deal with source code \
                    components that tend to contribute to poor similarity results. We conclude by presenting \
                    experimental results, and by highlighting some of the benefits of our similarity \
                    measurements."
    },
    {
        id:11,
        title:"CRAFT: A Framework for Evaluating Software Clustering Results in the Absence of Benchmark Decompositions",
        cite: "B. S. Mitchell, S. Mancoridis. In the IEEE Proceedings of the 2001 Working Conference in Reverse \
                Engineering (WCRE'01), Stuttgart, Germany, October, 2001. RECEIVED BEST PAPER AWARD",
        link:"/pubs/wcre01.pdf",
        slides: null,
        abstract:"Software clustering algorithms are used to create high-level views of a system's structure \
                   using source code-level artifacts. Software clustering is an active area of research that has \
                   produced many clustering algorithms. However, we have seen very little work that investigates \
                   how the results of these algorithms can be evaluated objectively in the absence of a benchmark \
                   decomposition, or without the active participation of the original designers of the system. \
                   Ideally, for a given system, an agreed upon reference (benchmark) decomposition of the system's \
                   structure would exist, allowing the results of various clustering algorithms to be compared \
                   against it. Since such benchmarks seldom exist, we seek alternative methods to gain confidence \
                   in the quality of results produced by software clustering algorithms. In this paper we present a\
                   tool that supports the evaluation of software clustering results in the absence of a \
                   benchmark decomposition."
    },
    {
        id:12,
        title:"An Architecture for Distributing the Computation of Software Clustering Algorithms",
        cite:"B. S. Mitchell, M. Traverso, S. Mancoridis. In the IEEE/IFIP Proceedings of the 2001 Working \
                Conference on Software Architecture (WICSA'01), Amsterdam, Netherlands, August, 2001. ",
        link:"/pubs/wicsa2001.pdf",
        slides: [
            {
                type: "PPT",
                description: "Powerpoint - PPT",
                link: "/pubs/wicsa01pres.ppt"
            },
            {
                type: "PDF",
                description: "Acrobat - PDF",
                link: "/pubs/wicsa01pres.pdf"
            }
        ],
        abstract:"Collections of general purpose networked workstations offer processing capability that \
                often rivals or exceeds supercomputers. Since networked workstations are readily available \
                in most organizations, they provide an economic and scalable alternative to parallel \
                machines. In this paper we discuss how individual nodes in a computer network can be used \
                as a collection of connected processing elements to improve the performance of a software \
                engineering tool that we developed. \
                \
                Our tool, called Bunch, automatically clusters the structure of software systems into a \
                hierarchy of subsystems. Clustering helps developers understand complex systems by providing \
                them with high-level abstract (clustered) views of the software structure. The algorithms \
                used by Bunch are computationally intensive and, hence, we would like to improve our tool's \
                performance in order to cluster very large systems. This paper describes how we designed \
                and implemented a distributed version of Bunch, which is useful for clustering large systems."
    },
    {
        id:13,
        title:"Bunch: A Clustering Tool for the Recovery and Maintenance of Software System Structures",
        cite:"S. Mancoridis, B.S.Mitchell, Y.Chen, E.R.Gansner. In the IEEE Proceedings of the 1999 \
                International Conference on Software Maintenance (ICSM'99), Oxford, UK, August, 1999.",
        link:"/pubs/icsm99.pdf",
        slides: null,
        abstract:"Software systems are typically modified in order to extend or change their functionality, \
                    improve their performance, port them to different platforms, and so on. For developers, \
                    it is crucial to understand the structure of a system before attempting to modify it. The \
                    structure of a system, however, may not be apparent to new developers, because the design \
                    documentation is non-existent or, worse, inconsistent with the implementation. This \
                    problem could be alleviated if developers were somehow able to produce high-level system \
                    decomposition descriptions from the low-level structures present in the source code. \
                    \
                    We have developed a clustering tool called Bunch that creates a system decomposition \
                    automatically by treating clustering as an optimization problem. This paper describes \
                    the extensions made to Bunch in response to feedback we received from users. The most\
                    important extension, in terms of the quality of results and execution efficiency, is a\
                    feature that enables the integration of designer knowledge about the system structure \
                    into an otherwise fully automatic clustering process. We use a case study to show how our \
                    new features simplified the task of extracting the subsystem structure of a medium size \
                    program, while exposing an interesting design flaw in the process."
    },
    {
        id:14,
        title:"Automatic Clustering of Software Systems using a Genetic Algorigthm",
        cite:"D. Doval, S. Mancoridis, B.S.Mitchell. In the IEEE Proceedings of the 1999 International \
                Conference on Software Tools and Engineering Practice (STEP'99), Pittsburgh, PA, August, 1999.",
        link:"/pubs/step99.pdf",
        slides: null,
        abstract:"Large software systems tend to have a rich and complex structure. Designers typically \
                    depict the structure of software systems as one or more directed graphs. For example, \
                    a directed graph can be used to describe the modules (or classes) of a system and their \
                    static inter-relationships using nodes and directed edges, respectively. We call such \
                    graphs module dependency graphs (MDGs). \
                    \
                    MDGs can be large and complex graphs. One way of making them more accessible is \
                    to partition them, separating their nodes (i.e., modules) into clusters (i.e., subsystems). \
                    In this paper, we describe a technique for ﬁnding ‘good’ MDG partitions. Good partitions \
                    feature relatively independent subsystems that contain modules which are highly \
                    inter-dependent. Our technique treats ﬁnding a good partition as an optimization problem, \
                    and uses a Genetic Algorithm (GA) to search the extraordinarily large solution space of all \
                    possible MDG partitions. The effectiveness of our technique is demonstrated by applying it \
                    to a medium sized software system."
    },
    {
        id:15,
        title:"Using Automatic Clustering to Produce High-Level System Organizations of Source Code",
        cite:"S. Mancoridis, B.S.Mitchell, C.Rorres, Y.Chen, E.R.Gansner. In the IEEE Proceedings of the \
                 1998 International Workshop on Program Understanding (IWPC'98), Ischia, Italy, June, 1998.",
        link:"/pubs/iwpc98.pdf",
        slides: null,
        abstract:"This paper describes a collection of algorithms that we developed and implemented to\
                    facilitate the automatic recovery of the modular structure of a software system from \
                    its source code.\
                    \
                    We treat automatic modularization as an optimization problem. Our algorithms make use \
                    of traditional hill-climbing and genetic algorithms."
    }
]